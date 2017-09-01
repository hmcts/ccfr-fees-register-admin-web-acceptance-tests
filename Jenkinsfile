#!groovy
@Library("Reform") _

properties([
        [$class: 'GithubProjectProperty', displayName: 'Fees Register Admin Web acceptance tests', projectUrlStr: 'https://git.reform.hmcts.net/fees-register/fees-register-admin-web-acceptance-tests'],
        parameters([
                string(defaultValue: 'latest', description: 'fees-admin-web Docker Version', name: 'feesAdminWebDockerVersion')
        ])
])


lock('Fees Register Admin Web acceptance tests') {
    node {
        try {
            stage('Checkout') {
                deleteDir()
                checkout scm
            }

            try {
                stage('Start Docker Images') {
                    env.FEES_ADMIN_WEB_DOCKER_VERSION = params.feesAdminWebDockerVersion

                    sh 'docker-compose pull'
                    sh 'docker-compose up -d fees-admin-web'
                    sh 'docker-compose up wait-for-startup'
                }

                stage('Run acceptance tests') {
                    def rtMaven = Artifactory.newMavenBuild()
                    rtMaven.tool = 'apache-maven-3.3.9'
                    rtMaven.run pom: 'pom.xml', goals: 'clean package surefire-report:report -Dspring.profiles.active=docker'

                    publishHTML([
                            allowMissing         : false,
                            alwaysLinkToLastBuild: true,
                            keepAll              : false,
                            reportDir            : 'target/site',
                            reportFiles          : 'surefire-report.html',
                            reportName           : 'Acceptance Test Report'
                    ])
                }
            } finally {
                stage('Stop Docker Images') {
                    sh 'docker-compose down'
                }
            }
        } catch (err) {
            notifyBuildFailure channel: '#cc-payments-tech'
            throw err
        }
    }
}
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

            stage('Setup') {
                sh 'yarn install'
            }

            try {
                stage('Start Docker Images') {
                    env.FEES_ADMIN_WEB_DOCKER_VERSION = params.feesAdminWebDockerVersion

                    sh 'docker-compose build'
                    sh 'docker-compose pull'
                    sh 'docker-compose up fees-admin-web remote-webdriver'
                }

                stage('Run acceptance tests') {
                    sh 'mkdir -p output'
                    sh 'docker-compose up integration-tests'

                    def exitCode = sh returnStdout: true, script: "docker-compose ps -q integration-tests | xargs docker inspect -f '{{ .State.ExitCode }}'"
                    if (exitCode.toInteger() > 0) {
                        steps.archiveArtifacts 'output/*.png'
                        steps.error("Integration tests failed")
                    }
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
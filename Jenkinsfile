#!groovy

properties(
    [[$class: 'GithubProjectProperty', displayName  : 'fees register admin web', projectUrlStr: 'https://git.reform.hmcts.net/fees-register/fees-register-admin-web-acceptance-tests'],
    pipelineTriggers([[$class: 'GitHubPushTrigger']])]
)

@Library('Reform')
import uk.gov.hmcts.Packager

def packager = new Packager(this, 'fees-register')
def rpmVersion

timestamps {
  milestone();
  lock(resource: "integration-tests-${env.BRANCH_NAME}", inversePrecedence: true) {
    node {
      
      try {
        stage('Checkout') {
          deleteDir()
          checkout scm
        }

        stage('Setup') {
          sh '''
            npm install
           '''
         }

          stage('Publish Docker') {
            dockerImage imageName: 'auth/fees-register-admin-web-acceptance-tests'
          }

      } catch (err) {
        notifyBuildFailure channel: '#cc_payments-tech'
        throw err
      }

  	  milestone();
    }
  }
}

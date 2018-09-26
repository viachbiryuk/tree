pipeline {

    agent { docker { image 'node:8' } }

    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'echo "Node.js Rules!"'
            }
        }
        stage('my-test') {
            steps {
                sh 'node test.js'
            }
        }
    }

    environment {
      DISABLE_AUTH = 'true'
      DB_ENGINE = 'postgres'
    }

    post {
        always {
            echo '01. This will always run'
        }
        success {
            echo '02. This will run only on Success'
            slackSend channel: '#__jenkins',
                      color: 'good',
                      message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
            mail to: 'viachbiryuk@gmail.com',
                 subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.BUILD_URL}"
        }
        failure {
            echo '03. This will run only if failed'
        }
        unstable {
            echo '04. This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state pipeline was changed'
            echo 'For example, if the Pipeline was previously failing but is not success'
        }
    }

}

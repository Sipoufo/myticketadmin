node {
    def WORKSPACE = "/var/lib/jenkins/workspace/Myticket_Admin"
    def dockerImageTag = "myticket-fo-deploy${env.BUILD_NUMBER}"
    try{
        stage('Clone Repo') {
            git url: 'https://github.com/Sipoufo/myticketadmin.git',
                credentialsId: 'myticket_ssh',
                branch: 'master'
            sh 'npm install'
         }
        stage('Build docker') {
             dockerImage = docker.build("myticket-admin-deploy:${env.BUILD_NUMBER}")
        }
        stage('Deploy docker'){
              echo "Docker Image Tag Name: ${dockerImageTag}"
              sh "docker stop myticket-admin-deploy || true && docker rm myticket-admin-deploy || true"
              sh "docker run --net=host --name myticket-admin-deploy -d -p 3200:3200 myticket-admin-deploy:${env.BUILD_NUMBER}"
        }
    }catch(e){
        throw e
    }
}

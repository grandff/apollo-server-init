## Apollo
- typeDefs와 resolvers를 어느정도 추가한 버전임
- 추후 아예 없이 graphql 만 실행할 수 있도록 수정 예정

## Postgres
- 참고 URL : https://dejavuqa.tistory.com/16
- https://m.blog.naver.com/PostView.nhn?blogId=truelifer&logNo=220706114081&proxyReferer=&proxyReferer=https:%2F%2Fwww.google.com%2F

- vi 단축키 : https://wayhome25.github.io/etc/2017/03/27/vi/

- postgres 실행 참고 : https://stackoverflow.com/questions/42653690/psql-could-not-connect-to-server-no-such-file-or-directory-5432-error

- 개지랄 염병의 끝.. : https://askubuntu.com/questions/413585/postgres-password-authentication-fails#

## Postgres 명령어
설정 파일 수정 : sudo vi /etc/postgresql/13(or 10)/main/pg_hba.conf
재기동 혹은 시작 : sudo service postgresql restart(or start)
postgres 접속 : sudo -u postgres psql

유저 생성 관련 : https://browndwarf.tistory.com/3
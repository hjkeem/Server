# Restful Api

* POST /signup : User signup ( 쓰루 회원가입 )

> Params

    id : {type : String, unique: true}, // ID

    name : {type: String}, // 이름

    passwd : {type : String}, // Password

> Response

    HTTP 200 : { message : "success!"}

    HTTP 409 : { message : "already exist"}

* GET /signin : User signin ( 쓰루 로그인 )

> Params

    id : {type: String, unique: true}, // ID

    passwd : {type : String},

> Response

    HTTP 200 : {
      "SocialEmailList" : [
         {
            "email": "aaa@aaa.com",
            "passwd": "aaaaa"
         }
      ],
      
      "EmailList": [
        {
            "email": "asdasd@asd"
        },
        {
            "email": "asdqwdqwd@aaa"
        },
        {
            "email": "qeqwd@rtwe"
        }
      ],
      
      "token": "ledOrx8svzbwXdjBi1A99XImN55DS5sZmuI9ePqj"
    }

    HTTP 404 : { message : "Not found"}

* POST /addAccount : Push New Email Account ( 쓰루 유저에 소셜 이메일 계정 추가 )

> Params

    email : {type: String, unique: true}, // 쓰루 유저가 추가할 이메일 Email

    token : {type: String} // 쓰루 유저의 토큰

> Response

    HTTP 200 : { 
      email : "입력한 이메일",
      token : "유저 토큰"
    }
    
    HTTP 409 : { message : "already exist" } 
    HTTP 500 : { message : "ERR!"}

  * POST /removeAccount : Remove Email Account ( 쓰루 유저에 소셜 이메일 계정 삭제 )

  > Params

      email : {type: String, unique: true}, // 쓰루 유저가 삭제할 이메일 Email
      
      psswd : {tupe: String}, // 삭제할 이메일의 passwd

      token : {type: String} // 쓰루 유저의 토큰

  > Response

      HTTP 200 : { message : "success!" }

      HTTP 500 : { message : "ERR!"}

* POST /pushOne : Push Email in List ( 신뢰이메일리스트에 새 이메일 하나 추가 )

> Params

    token : {type: String}, // 유저 토큰

    email : {type : String}, // 추가 할 이메일

> Response

    HTTP 200 : { message : "success!"} // 성공

    HTTP 404 : { message : "User Not Found!" } // 유저 미확인

    HTTP 409 : { message : "already exist!" } // 이메일 중복 ( 리스트에 이미 존재 시 )

    HTTP 500 : { message : "ERR!" } // 서버 에러

* POST /push : Push Email in List ( 신뢰이메일리스트에 새 이메일 다중 추가 ) //리드미 수정 예정 - 코드 완료

  > Params

      token : {type: String}, // 유저 토큰

      email : {type : String}, // 추가 할 이메일

  > Response

      HTTP 200 : { message : "success!"} // 성공

      HTTP 404 : { message : "User Not Found!" } // 유저 미확인

      HTTP 409 : { message : "already exist!" } // 이메일 중복 ( 리스트에 이미 존재 시 )

      HTTP 500 : { message : "ERR!" } // 서버 에러

* POST /pullOne : Pull Emaill in List ( 신뢰이메일리스트에서 이메일 하나 삭제 )

> Params

    token : {type: String}, // 유저 토큰

    email : {type : String}, // 추가 할 이메일

> Response

    HTTP 200 : { message : "success!"} // 성공

    HTTP 500 : { message : "ERR!" } // 서버 에러
    
* POST /pull : Pull Emaill in List ( 신뢰이메일리스트에서 이메일 다중 삭제 ) //리드미 수정 예정 - 코드 완료

> Params

    token : {type: String}, // 유저 토큰

    email : {type : String}, // 추가 할 이메일

> Response

    HTTP 200 : { message : "success!"} // 성공

    HTTP 500 : { message : "ERR!" } // 서버 에러


* POST /list : Show Email List ( 신뢰이메일리스트 보기 )

> Params

    token : {type: String} // 유저 토큰

> Response

    HTTP 200 : {
      "list": [
        {
          "email": "test@naver.com"
        }
      ]
    }

    HTTP 404 : {message : "User Not Found"} // 유저 미확인

* POST /check : Check "Is Email in List?" ( 신뢰이메일인지 확인 )

> Params

    token : {type: String} // 유저 토큰

> Response

    HTTP 200 : { message : "success!"} // 이메일이 신뢰리스트에 있을 시

    HTTP 204 : { message : "Email Not Found!" }

    HTTP 404 : { message : "User Not Found" } // 유저 미확인

200926(토)
=========
부트스트랩
-------

```
 <div class="container" style="padding-top:50px"">
    <a href="" class="btn btn-default">default</a>
    <a href="" class="btn btn-primary">primary</a>
    <a href="" class="btn btn-success">success</a>
    <a href="" class="btn btn-info">info</a>
    <a href="" class="btn btn-warning">warning</a>
    <a href="" class="btn btn-danger">danger</a>
</div>
```
* 6가지의 버튼이 있음
<img width="479" alt="스크린샷 2020-09-26 오전 11 16 07" src="https://user-images.githubusercontent.com/47624978/94327959-bce7eb80-ffe9-11ea-8494-d00057b7f8d0.png">
<hr/>

```
<div class="container" style="padding-top:30px">
        <table class="table table-bordered table-hover">
            <tr>
                <th>제목</th>
                <th>작성일</th>
                <th>삭제</th>
            </tr>
            <tr>
                <td>안녕하세요</td>
                <td>2020-09-26</td>
                <td>
                    <a href="" class="btn btn-danger">삭제</a>
                </td>
            </tr>
            <tr>
                <td>안녕하세요</td>
                <td>2020-09-26</td>
                <td>
                    <a href="" class="btn btn-danger">삭제</a>
                </td>
            </tr>
        </table>
        <a href="" class="btn btn-default">작성하기</a>
    </div>
</div>
```
* 테이블 컴포넌트
<img width="1177" alt="스크린샷 2020-09-26 오전 11 25 20" src="https://user-images.githubusercontent.com/47624978/94328153-0553d900-ffeb-11ea-9634-a3a846e51ab5.png">
<hr/>

```
<div class="container" style="padding-top:50px">
        <div class="panel panel-default">
            <div class="panel-heading">
                인사하는 법
            </div>
            <div class="panel-body">
                안냐세요 <br>
                안냐세요 <br>
                안냐세요 <br>
            </div>
        </div>
 </div>
```
* 패널 컴포넌트
* 로그인 창을 만들때 유용하다
* panel-heading 부분과 panel-body 부분으로 나뉨
<img width="967" alt="스크린샷 2020-09-26 오전 11 36 02" src="https://user-images.githubusercontent.com/47624978/94328317-7942b100-ffec-11ea-9ded-89bd4d39e659.png">
<hr/>

```
<div class="container" style="padding-top:50px"">
        <ul>
            <li class="form-inline"> 
                아이디 :
                <input type="text" class="form-control">
            </li>
            <li class="form-inline"> 
                패스워드 :
                <input type="password" class="form-control">
            </li>
            <li class="form-inline">
                <label>생년월일</label>
                <select name="" id="">
                    <option value="">년도</option>
                    <option value="">1999</option>
                    <option value="">1998</option>
                </select>
                -
                <select name="" id="">
                    <option value="">월</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
                -
                <select name="" id="">
                    <option value="">일</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </li>
            <li class="form-inline">
                <input type="checkbox" id="agree">
                <label for="agree">약관에 동의하시겠습니까?

                </label>
            </li>
        </ul>
</div>
```
* 폼 컴포넌트
* form-inline class를 추가하지 않으면 줄바꿈이 된다
* label에 for로 input의 id와 연결하면 label을 클릭해도 input에 영향을 미친다(ex 체크박스)
<img width="293" alt="스크린샷 2020-09-26 오후 12 13 38" src="https://user-images.githubusercontent.com/47624978/94328940-b8273580-fff1-11ea-962e-58cc84f84ab4.png">

</hr>

```
  <div class="container" style="padding-top:50px"">
        <div class="container" style="padding-top: 100px">
            <nav class="navbar navbar-inverse"> <!--default와 inverse-->
                <div class="container-fluid">
                    <div class="navbar-header">
                        <!-- 오른쪽 메뉴바-->
                        <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#nav_menu" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span> 
                            <span class="icon-bar"></span> 
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            bootstrap
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="nav_menu">
                        <ul class="nav navbar-nav">
                            <li class="active">
                                <a href="">HTML</a>
                            </li>
                            <li>
                                <a href="">CSS</a>
                            </li>
                            <li>
                                <a href="">PYTHON</a>
                            </li>
                            <li>
                                <a href="">Javascript</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>    
        </div>
    </div>
```
* 모바일용 버튼은 네비바 헤더에 넣어야함
* 데이터 타겟을 맞춰줘야함 (안맞추면 출력 안됨)
* navbar navbar-inverse로 메뉴바 색상 반전 가능(default은 흰색, inverse는 검정)
* class="active" 추가로 버튼 활성화 가능
<hr/>

```
<div class="container" style="padding-top:50px">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    L O G I N
                </div>
                <div class="panel-body">
                    <input type="text" class="form-control" placeholder="ID를 입력해주세요!">
                    <br>
                    <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요!">
                    <br>
                    <button class="btn btn-lg btn-success btn-block">로그인</button>
                    <br>
                    <a href="" class="btn btn-lg btn-default btn-block">
                        <i class="fa fa-github" aria-hidden="true"></i> 깃허브 로그인</a>
                </div>
            </div>
        </div>    
    </div>
```

* 로그인 창 구현
* col-md-offset-4로 가운데 정렬
* 아이콘은 font awesome 4 이용 (현재 5까지 나온 상태)
* font awesome 이용을 위해서는 cdn 사용 등 별도의 작업을 해줘야함
<img width="302" alt="스크린샷 2020-09-26 오후 12 39 25" src="https://user-images.githubusercontent.com/47624978/94329362-59fc5180-fff5-11ea-9d83-9ba8f2168e65.png">


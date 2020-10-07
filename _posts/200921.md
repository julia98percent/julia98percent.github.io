200921(월)
=========
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue test</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <div>{{ msgA }}</div>
        <div>{{ msgB }}</div>
        <button v-on:click="changeMessage">Change!</button>
    </div>

    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                msgA: 'Message A.',
                msgB: ''
            },
            methods: {// function 생략가능 ddd: function()
                changeMessage() {
                    this.msgA = 'Changed message A!'
                    this.msgB = 'Changed message B!'
                }
            },
            computed: {}, //계산된 데이터 
            watch: { //변경될때마다 msgA 함수가 실행됨
                msgA (value) {
                    console.log(value)
                }
            },
            mounted () {
            }
        })
        console.log(vm);
    </script>
</body>
</html>
```
<hr/>

* 데이터에 정의된 것만 기본적으로 반응형(반응성)을 가지게 된다
* 데이터를 무조건 추가한다고 해서 반응성을 가지는 것은 아님!
* 뷰 인스턴스가 생성될때 정의되지 않은 데이터는 반응성을 가지지 않는다
* 그래서 빈 문자열이라도 정의해 놓는것이 좋다 -> 그래야 반응성을 가지니까!

<hr/>
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Test</title>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
    <div id="app">
        <div ref="msg">{{ msg }}</div>
        <div ref="div"></div>
    </div>

    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                msg: 'Hello Vue!'
            },
            beforeCreate () {
                console.log('beforeCreate!', this.msg)
            },
            created () {
                console.log('created!', this.msg)
            },
            beforeMount () {
                console.log('beforeMount!', this.$refs.div)
            },
            mounted () {
                console.log('mounted!', this.$refs.div)
            },
            beforeUpdate () {
                console.log('beforeUpdate', this.$refs.msg.innerText)
            },
            updated () {
                console.log('updated', this.$refs.msg.innerText)
            },
            beforeDestroy () {
                console.log('beforeDestroy')
            },
            destroyed () {
                console.log('destroyed!')
            }
        })
    </script>
</body>
</html>
```
<hr/>
<img width="359" alt="200921-01" src="https://user-images.githubusercontent.com/47624978/93777253-7ac45000-fc5f-11ea-8938-3ae0abad7617.png">

* beforeCreate - 생성되기 직전이라서 undefined
* createed - 생성 후라서 정의됐기 때문에 msg의 내용을 알고있음
* beforemount에선 아직 html요소와 뷰 인스턴스가 연결되기 직전이라서 html의 요소를 알 수 없음(undefined)
* mounted에선 연결이 되고난 뒤에 체크한 것이기 때문에 div인 것을 알고 있음
* beforeUpdate - 데이터가 변경되고 나서 반응형에 의해 화면이 다시 렌더링 되기 직전에 실행됨
* updated - 화면이 다시 그려지고 난 후에 실행
* destroy가 이루어지고 난 후에는 반응성을 잃음
*Create mounted가 제일 많이 쓰인다*
<hr/>

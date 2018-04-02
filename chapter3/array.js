
console.log("chapter 3")

// Inside Javascript에서 배운 내용을 토대로
// Javascript에서 동작하는 Array 와 동일한 기능을 수행하는 객체를 만들어본다.



var myArray = {
  length: 0,
  append: function(value){
    index = this.length;
    this.length ++;
    this[index.toString()]=value;
  },
  get: function(index){
    if(typeof(index) != 'number'){
      console.error("get Function must input number!");
      return;
    }

    if(index < 0){
        index += this.length;
    }

    if(!(index < this.length) || index < 0 ){
      console.error("Out of index");
      return;
    }

    // index의 Condition에 문제가 없는경우 값을 출력한다.
    return this[index.toString()] ;
  },
  add: function(index, value){
    if(typeof(index) != 'number'){
      console.error("get Function must input number!");
      return;
    }
    if(index < 0 ){
      console.error("Out of index");
      return;
    }

    if(!(index < this.length)){
      var before_length = this.length
      this.length = index+1

      // 이부분이 없어도 상관없으나, array에 보면, 부분분 값을 입력하였을때,
      // 3: undefined
      // 와 같이 표시된다. 이를 동일하게 나타내고자 아래와 같은 반복문을 추가한다.
      for(var i=before_length; i<this.length; i++){
        this[i.toString()] = undefined;
      }
    }

    // index의 Condition에 문제가 없는경우 자기자신에게 값을 할당한다.
    this[index.toString()]=value;
  }
}

myArray.append("hello");
myArray.add(7, "jump data!");

console.log("for prop 를 이용한 출력 :")
for (prop in myArray){
  console.log(prop+":", myArray[prop])
}
console.log("")
console.log("")
console.log("그냥 객체 출력")
console.log(myArray)
console.log(myArray.get(-1))

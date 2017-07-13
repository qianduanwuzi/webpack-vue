<template>
  <div id="con">
    <!--<div id="location" style="width:100px;height:100px;border:1px solid black" @drop="drop($event)" @dragover="allowDrop($event)">
              this is location
              <div>this is middle</div>
            </div>
            <div id="dragTarget" draggable="true" @dragstart="drag($event)">
              this is target
            </div>
          
            <div style="margin-top: 60px;">
              <div draggable="true" style="width:100px;height:30px;border:1px solid black" v-for="(one,index) in textData" :key="one" @dragstart="dddrag($event,index)" @drop="dddrop($event,index)" @dragover="allowDrop($event)">
                {{one}}
              </div>
            </div>-->
    <b>draganddrop/拖动，支持上下移动</b>
    <div style="margin-top: 100px"></div>
    <div style="float: left">
      <div v-for="one in data" :key="one" draggable="true" @dragstart.self="ddrag($event)" style=" height: 30px; width: 100px;background-color: rgb(0,187,187);text-align:center;margin-top: 20px;color: white;font-size: 20px">
        {{one}}
      </div>
    </div>
  
    <div id="pur" style="height: 200px; width: 500px;border: 1px solid red;float: left" @drop.self="ddrop($event)" @dragover.self="allowDrop($event)">
      <div v-for="(one,index) in html" :key="index" @dragstart="rag($event,index)" @drop="rop($event,index)" @dragover="allowDrop($event)" draggable="true" style="margin-top: 10px">
        <div style="display: inline-block" v-html="one"></div>
        <button style="display: inline-block;height:30px;width:50px;background-color: rgb(202,23,29);color:white" @click="remove(index)">删除</button>
      </div>
    </div>
  
  </div>
</template>

<script>
let dom = '';
let text = "<div><input type='text' placeholder='' id='input' /></div>";
let button = "<div id='button'><button>button</button></div>";
let select = "<div id='select'><select><option>1</option</select></div>";
export default {
  data() {
    return {
      data: [
        '文本',
        '按钮',
        '下拉菜单'
      ],
      textData: [
        'this is text1',
        'this is text2',
        'this is text3'
      ],
      dragInd: -1,
      dropInd: -1,
      html: [],
      vhtml: '',
      canUpDown: true
    }
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
    rag(e, ind) {
      console.log('a');
      console.log(typeof (ind))
      this.canUpDown = false;
      this.dragInd = ind;
      // this.$set(parent,'dragInd', ind)
    },
    rop(e, ind) {
      // console.log('dropind',ind)
      console.log('b')
      e.preventDefault();
      let a = this.html[this.dragInd];
      let b = this.html[ind];
      this.$set(this.html, this.dragInd, b)
      this.$set(this.html, ind, a)
    },
    remove(ind) {
      this.html.splice(ind, 1)
    },
    // dddrag(e, ind) {
    //   this.dragInd = ind;
    //   // this.$set(dragInd, ind)
    // },
    // dddrop(e, ind) {
    //   e.preventDefault();
    //   let a = this.textData[this.dragInd];
    //   let b = this.textData[ind];
    //   this.$set(this.textData, this.dragInd, b)
    //   this.$set(this.textData, ind, a)
    // },

    parse(t, id) {
      console.log('c')
      let parser = new DOMParser();
      let el = parser.parseFromString(t, "text/html");
      let element = el.getElementById(id);
      return element
    },
    ddrag(e) {
      this.canUpDown = true;
      let a = e.target.innerHTML.trim();
      if (a == '文本') {
        this.vhtml = text
        // let el = this.parse(text, 'input')
        // dom = el
      }
      else if (a == '按钮') {
        this.vhtml = button
        // let el = this.parse(button, 'button')
        // dom = el
      }
      else {
        this.vhtml = select
        // let el = this.parse(select, 'select')
        // dom = el
      }
    },
    ddrop(e) {
      if (this.canUpDown) {
        console.log('e')
        e.preventDefault();
        this.html.push(this.vhtml);
      }

      // e.target.appendChild(dom);
    },

    // drag(e) {
    //   e.dataTransfer.setData("Text", e.target.id);
    // },
    // drop(e) {
    //   // console.log(e)
    //   e.preventDefault();
    //   var data = e.dataTransfer.getData('Text');
    //   console.log(document.getElementById(e.target.id).$parent)
    //   // document.getElementById(e.target.id).parent.appendChild(document.getElementById(data))
    // },
    allowDrop(e) {
      console.log('f')
      e.preventDefault()
    },
  },
  components: {
  }
}
</script>

<style>

</style>
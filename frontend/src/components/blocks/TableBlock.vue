<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
            <h5 class="heading-text-title" v-html="countUpdate()"></h5>
            <h5 class="heading-final"></h5>
        <tr>
          <th 
            v-for="(item, index) in tableHeaderItems"
            :key="index"
            :class="[textClass(index), 'black--text','pa-2']">
            <span v-html="item"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(items, index) in tableRowItems"
            :key="index"
            :class="[textClass, 'black--text']">
          <td
            v-for="(item, index) in items"
            :key="index"
            :class="[textClass(index), 'black--text', 'pa-2']">
            <span v-html="isCellNumeric(item, index)"></span>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'TableBlock',
  data() {
    return {
      rightAlignedIndexes: [],
      headingCount:0,
      titleValue:''
    }
  },
  props: {
    block: {
      type: [Object]
    }
  },
  methods: {
    isCellNumeric(str, idx) {
      
      const numPercentage = /^(?:[1-9]\d?%|0%)$/
      const isMonetary = (str.includes('$', 0) || str.match(numPercentage)) && !str.includes('(')
      const isValidNum = /^[0-9,.]*$/.test(str) && str.includes(',')

      // console.log('isCellNumeric str: ', str, isMonetary)

      if(isMonetary || isValidNum) {
        if (!this.rightAlignedIndexes.includes(idx)) {
          this.rightAlignedIndexes.push(idx)
        }
        
      }

      return str
    },
    countUpdate(){
      let headerClassCount = document.getElementsByClassName('heading-final').length || 0;
      if(document.getElementsByClassName('heading-final')[this.headingCount]){
        console.log('the heading tags:- '+document.getElementsByClassName('heading-final')[this.headingCount]);
      document.getElementsByClassName('heading-final')[this.headingCount].innerHTML = this.block.data.tableHeadingText[this.headingCount];
      }
      console.log('the heading count:- '+headerClassCount);
      if(this.headingCount <= this.block.data.tableHeadingText.length){
      this.headingCount = headerClassCount;
      }

      return "";
    }
  },
  computed: {
    tableHeaderItems() {
      const hItems = this.block.data.content[0]
      return hItems
    },
    tableRowItems() {
      const rItems = this.block.data.content.filter((item, index) => index > 0)
      return rItems
    },
    textClass() {
      return (idx) => {
        if (this.rightAlignedIndexes.includes(idx)) {
          return 'text-right'
        } else {
          return (this.block?.tunes?.alignmentTune?.alignment) ? `text-${ this.block?.tunes?.alignmentTune?.alignment }` : 'text-left'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    vertical-align: top;
    border-bottom: 1px solid var(--v-accent-base) !important;
  }
  .heading-text-title {
    font-size: xx-large;
    font-weight: 900;
  }
  .heading-final{
    font-size: xx-large;
  }

  
</style> 
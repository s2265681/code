<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th v-for="(col, index) in cloneColumns" :key="index">
            <div
              v-if="col.type == 'selection'"
              class="selection"
              @change="checkAll"
            >
              <input type="checkbox" checked="cloneColumns.some(e=>e.checked)"/>
            </div>
            <div v-else>
              {{ col.title }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in cloneData"
          :key="index"
          @mousemove="rowOver(index)"
          @mouseout="rowOut(index)"
          ref="row"
        >
          <td v-for="(col, index) in cloneColumns" :key="index">
            <div
              v-if="col.type == 'selection'"
              class="selection"
              @change="checkOne"
            >
              <input type="checkbox" checked="col.checked"/>
            </div>
            <div v-else>
              {{ row[col.key] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "table",
  data() {
    return {
      cloneColumns: cloneDeep(this.columns),
      cloneData: cloneDeep(this.data),
    };
  },
  methods: {
    checkAll() {},
    checkOne() {},
    rowOver(i) {
      this.$refs.row[i].style.background = "#eee";
    },
    rowOut(i) {
      this.$refs.row[i].style.background = "#fff";
    },
  },
  mounted() {
    console.log(this.cloneColumns, "//");
    console.log(this.columns, "//");
    this.cloneColumns.forEach(el=>{
   
      el.checked = false
         console.log(el,'el')
    })
    console.log(this.cloneColumns, "2er/");
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
.container table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #eee;
  text-align: left;
}
.container table th {
  background: #eee;
}
.container table td,
.container table th {
  border: 1px solid #eee;
  height: 50px;
  line-height: 50px;
}

.selection {
  text-align: center;
  vertical-align: middle;
}
</style>

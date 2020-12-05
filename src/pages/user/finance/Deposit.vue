<template>
  <q-page>
    <q-card class="my-card   q-px-xl q-py-lg">
      <q-card-section>
        <div class="row justify-start items-start">
          <div class="col-1 text-h6">
            充值金额
          </div>
          <q-input
            class="col-3  q-ml-lg"
            rounded
            outlined
            dense
            v-model="text"
            color="white"
            hint="单笔充值限额为200～20000元"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-start items-start">
          <div class="col-1 text-h6">
            充值方式
          </div>
          <div class="col-5 q-px-md">
            <q-list>
              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section avatar>
                  <q-radio
                    v-model="color"
                    val="teal"
                    color="teal"
                  />
                </q-item-section>
                <q-item-section>
                  <q-icon name="money"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Teal</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section avatar>
                  <q-radio
                    v-model="color"
                    val="orange"
                    color="orange"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Orange</q-item-label>
                  <q-item-label caption>With description </q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section
                  avatar
                  top
                >
                  <q-radio
                    v-model="color"
                    val="cyan"
                    color="cyan"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Cyan</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <div class="">
              *充值中出现的账号、二维码仅为一次性使用，不得重复使用。
              重复使用造成的资金丢失， 本平台概不负责。
              充值订单发起后，请尽快完成支付。
              支付超过15分钟仍未到账，请及时联系在线客服帮您处理。
              超过一周未联系在线客服处理的，可能会因为无法查询款项而影响不到账的办理。
            </div>
            <q-btn
              class="glossy"
              rounded
              color="deep-orange"
              label="申请充值"
              style="width: 200px;"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card>
      <div class="q-pa-md">
        <q-table
          title="充值记录"
          :data="data"
          :columns="columns"
          row-key="name"
        />
      </div>
    </q-card>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      color: 'cyan',

      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]


    }
  }
}
</script>

<style lang="scss" scoped>
// .row > div {
//
//     padding: 10px 15px;
//     // background: rgba(86,61,124,.15);
//     border: 1px solid ;
//
// }
</style>

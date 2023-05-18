<template>
    <div >
        <h1>전기차충전소</h1>
        <div>
            시도 : <select name="" id="" v-model="zcode">
                <option v-for="obj in zcodes" :key="obj.code" :value="obj.code">{{obj.desc}}</option>
            </select>
            구군 : <select name="" id="" v-model="zscode">
                <option v-for="obj in zscodes" :key="obj.code" :value="obj.code">{{obj.desc}}</option>
            </select>
            <button @click="searchCharger">검색</button>
        </div>
        <table align:center>
            <tr>
                <th>충전소명</th>
                <th>충전기타입</th>
                <th>주소</th>
                <th>이용가능시간</th>
                <th>충전기상태</th>
                <th>주차료무료</th>
                <th>위도</th>
                <th>경도</th>
            </tr>
            <tr v-for="(charger, i) in chargerList" :key="i">
                <td>{{charger.statNm}}</td>
                <td>{{charger.chgerType}}</td>
                <td>{{charger.addr}}</td>
                <td>{{charger.useTime}}</td>
                <td>{{charger.stat}}</td>
                <td>{{charger.parkingFree}}</td>
                <td>{{charger.lat}}</td>
                <td>{{charger.lng}}</td>

            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ElectricChargingStation',
    components: {},
    data(){
        return{
            chargerList:[

            ],
            zcode:'',
            zscode:'',
            zcodes:[
                {
                    code: 11, desc:"서울특별시"
                },
                {
                    code: 30, desc:"대전광역시"
                },
                {
                    code: 29, desc:"광주광역시"
                },
                {
                    code: 26, desc:"부산광역시"
                },
                {
                    code: 47, desc:"경상북도"
                },
            ],
            zscodes:[
                {
                    code: 11680, desc:"서울강남구"
                },
                {
                    code: 30200, desc:"대전유성구"
                },
                {
                    code: 47190, desc:"구미시"
                },
                {
                    code: 26440, desc:"부산강서구"
                },
                {
                    code: 29200, desc:"광주광산구"
                },
            ]
        }
    },
    created(){},
    methods:{
        searchCharger(){
            const baseUrl = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo`;
            const serviceKey = `XhzH6cfwKsUgZ5n1oppHUTpLdAyeICWtpLGOnrbgNjL9QXiwawsAojMHQ1R0i5xHBBaKyEM663RPBSLjOhd2jA%3D%3D`;
            const pageNo = 1;
            const numOfRows = 30;

            let url = `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`;
            if(this.zscode) url += `&zscode=${this.zscode}`;
            else url += `&zcode=${this.zcode}`;

            axios.get(url)
            .then(response=>{
                console.log(response);
                this.chargerList = response.data.items[0].item;
            })
        }
    }
}
</script>

<style>

</style>
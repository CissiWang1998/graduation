<template>
    <div>
        <ul item-layout="vertical">
            <li v-for="item in search_data" :key="item.name" @click="select(item)">
                <span>{{item.name}}</span>
                <span>{{item.info}}</span>
            </li>
        </ul>
        <Modal
            v-model="modal"
            title="详细信息">
            <ul>
                <li v-for="(key,value) in modal_dict" :key="key">
                    {{key}}:{{value}}
                </li>
            </ul>
        </Modal>
    </div>
</template>
<script>
import api from '../../fetch/api'
export default {
    data () {
        return {
            search_data: [{name: 'test1', info: '测试1'}, {name: 'test2', info: '测试2'}],
            search_key: '',
            search_index: '',
            modal: false,
            modal_dict: null
        }
    },
    methods: {
        getSearchPara () {
            this.search_index = this.$route.params.search_index
            this.search_key = this.$route.params.search_key
            this.getSearchResult()
        },
        getSearchResult () {
            api.getSearchResult(this.search_index, this.search_key)
            .then(res => {
                this.search_data = res
            })
            .catch(error => {
                console.log(error);
            });
        },
        select (item) {
            this.modal_dict = item
            this.modal = true
        }
    },
    created () {
        this.getSearchPara()
    },
    watch: {
        '$route': 'getSearchPara'
    }
}
</script>

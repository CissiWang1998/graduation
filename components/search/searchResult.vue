<template>
    <div>
        <List item-layout="vertical">
            <ListItem v-for="item in search_data" :key="item.name">
                <ListItemMeta  :title="item.name"/>
                {{ item.info }}
            </ListItem>
        </List>
    </div>
</template>
<script>
import api from '../../fetch/api'
export default {
    data () {
        return {
            search_data: null,
            search_key: '',
            search_index: ''
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

<template>
    <Form :model="formItem" :label-width="80">
    </Form>
</template>
<script>
export default {
    data () {
        return {
            item:null
        }
    },
    methods: {
        getItem () {
            this.item = this.$route.params.item
        }
    },
    created () {
        this.getItem()
    },
    watch: {
        '$route': 'getItem'
    }
}
</script>
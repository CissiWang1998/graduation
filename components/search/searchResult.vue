<template>
    <div>
        <List item-layout="vertical">
            <ListItem v-for="item in search_data" :key="item.title">
            </ListItem>
        </List>
    </div>
</template>
<script>
export default {
    data () {
        return {
            search_data: null,
        }
    },
    methods: {
        
    }
}
</script>
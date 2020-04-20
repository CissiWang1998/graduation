<style scoped>
.form{
    width: 600px;
    margin-left: 100px;
}
</style>
<template>
    <div class='form'>
        <Form :model="item" :label-width="80">
            <div>
                <br>
                    <strong>基本信息</strong>
                <br>
                <FormItem label="姓名">
                    <Input v-model="item.name" disabled></Input>
                </FormItem>
                <FormItem label="职务">
                    <Input v-model="item.job_position" disabled></Input>
                </FormItem>
                <FormItem label="职称">
                    <Input v-model="item.job_title" disabled></Input>
                </FormItem>
                <FormItem label="学历">
                    <Input v-model="item.education" disabled></Input>
                </FormItem>
                <FormItem label="学位">
                    <Input v-model="item.degree" disabled></Input>
                </FormItem>
                <FormItem label="通信地址">
                    <Input v-model="item.contact_address" disabled></Input>
                </FormItem>
                <FormItem label="邮编">
                    <Input v-model="item.postcode" disabled></Input>
                </FormItem>
                <FormItem label="办公电话">
                    <Input v-model="item.office_phone" disabled></Input>
                </FormItem>
                <FormItem label="电子邮件">
                    <Input v-model="item.email" disabled></Input>
                </FormItem>
            </div>
            <div>
                <br>
                    <strong>教育背景</strong>
                    <FormItem >
                        <Input v-model="item.education_background" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>工作经历</strong>
                    <FormItem >
                        <Input v-model="item.work_experience" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>研究方向</strong>
                    <FormItem>
                        <Input v-model="item.research_fields" placeholder="逗号分隔开" ></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>招生专业</strong>
                    <FormItem>
                        <Input v-model="item.admissions_major" placeholder="逗号分隔开" ></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>科研项目</strong>
                    <FormItem >
                        <Input v-model="item.research_projects" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>教学工作</strong>
                    <FormItem >
                        <Input v-model="item.teaching" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>论文/期刊</strong>
                    <FormItem >
                        <Input v-model="item.paper_journal" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>专著/译著</strong>
                    <FormItem >
                        <Input v-model="item.monograph_translation" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>专利</strong>
                    <FormItem >
                        <Input v-model="item.patent" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>软件著作权</strong>
                    <FormItem >
                        <Input v-model="item.software_copyright" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>获奖与荣誉</strong>
                    <FormItem >
                        <Input v-model="item.awards" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <div>
                <br>
                    <strong>社会兼职</strong>
                    <FormItem >
                        <Input v-model="item.parttime_job" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                <br>
            </div>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            item: {
                name: '123',
                job_position: '',
                job_title: '',
                education: '',
                degree: '',
                contact_address: '',
                postcode: '',
                office_phone: '',
                email: '',
                education_background: '',
                work_experience: '',
                research_fields: '',
                admissions_major: '',
                research_projects: '',
                teaching: '',
                paper_journal: '',
                monograph_translation: '',
                patent: '',
                software_copyright: '',
                awards: '',
                parttime_job: ''}
        }
    },
    methods: {
        methods: {
            handleSubmit (name) {
                // api.updateTeacher(this.item)
                console.log(1234)
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
        // getItem () {
        //    this.item = this.$route.params.item
        // }
    },
    created () {
        this.getItem()
    },
    watch: {
        '$route': 'getItem'
    }
}
</script>

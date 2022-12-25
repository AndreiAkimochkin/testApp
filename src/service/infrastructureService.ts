import Api from './Api';

export default{
    async applications(){
        const response=await Api().get('applications');
        return response.data;
    },
    async interfaces(){
        const response=await Api().get('interfaces');
        return response.data;
    },
    async statuses(){
        const response=await Api().get('statuses');
        return response.data;
    },
    async nodes(){
        const response=await Api().get('nodes');
        return response.data;
    },
    async metrics(){
        const response=await Api().get('metrics');
        return response.data;
    },
}
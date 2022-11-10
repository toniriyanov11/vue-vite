import secure from "../utils/secure";
import axios from "axios";

const setup = () => {
    axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
    axios.defaults.showLoader = true;
    axios.interceptors.request.use(async config => {
        console.log('has params')
        // if (config.showLoader) {
        //     store.dispatch('loader/pending');
        // }

        // //decrypt dan get storage 
        // let token = null
        // if(localStorage.getItem("tokenAuth")){
        //     var dataSession = JSON.parse(localStorage.getItem("tokenAuth"))
        //     var dataSessionDecrypted = secure.decryptString(dataSession);
        //     const temp = JSON.parse(dataSessionDecrypted)
        //     token = temp.token
        // }
        
        // if (token) {
        //     if(token.includes('Bearer')) {
        //         config.headers['Authorization'] = token
        //     } else {
        //         config.headers['Authorization'] = 'Bearer ' + token
        //     }
        // } else {
        //     config.headers['Authorization'] =  null
        // }

        // const method = config.method.toLowerCase()
        // if ( method=='put' || method=='patch' || method=='delete' ) {
        //     config.headers.common['X-HTTP-Method-Override'] = config.method 
        //     config.headers.post['X-HTTP-Method-Override'] = config.method 
        //     config.method = 'post'
        // }

        if(config.params) {
            const encryptedParams = await secure.encryptString(JSON.stringify(config.params))
            config.params =  { qq: encryptedParams }    
        }

        if(config.data) {
            if(!(config.data instanceof FormData)){
                const encryptedData = await secure.encryptString(JSON.stringify(config.data))
                config.data =  { data: encryptedData }    
            }
        }
        return config
    },function(error) {
            // if (error.config.showLoader) {
            //     store.dispatch('loader/done');
            // }
            return Promise.reject(error);
    })

    axios.interceptors.response.use(response => {
        // if (response.config.showLoader) {
        //     store.dispatch('loader/done');
        // }
        // Decrypt data
        if(response && response.data && response.data.data) {
            const decryptedData = secure.decryptString(response.data.data)
            response.data = JSON.parse(decryptedData)   
        }
        return response
    },async function(error) {
        let response = error.response;

        // if (response.config.showLoader) {
        //     store.dispatch('loader/done');
        // }

        //   const code = parseInt(error.response && error.response.status)
        // if (code === 401) {
        //     alert("Unauthorized: Sesi habis. Silakan login kembali!")
        //     await logout()
            
        // }
        return Promise.reject(error);
    })
}


export default setup

import { axios } from 'axios'

export default function(){
    const BASE_URL = 'http://localhost:8080'
    const axiosGet = (URL, onSuccess = null, onFailed = null) => {
        const final_URL = URL.startWith('http') ? URL : BASE_URL + URL
        axios.get(final_URL).then((response) => {
            if(response.status === 200 && response.data){
                if(onSuccess){
                    onSuccess(response.data)
                } else {
                    if(onFailed){
                        onFailed(response.data)
                    }
                }
            }
        })
    }
}
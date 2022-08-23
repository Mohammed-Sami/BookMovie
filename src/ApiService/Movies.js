export default async function Movies(){
    try{
        const rawResponse = await fetch('http://localhost:8085/api/v1/movies/009ae262-a234-11e8-b475-720006ceb890',{
            method: "GET",
            headers: {
                "Accept": "applications/json",
                "Content-Type": "applications/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        console.log(result)
        if(rawResponse.ok){
            window.location.href = '/'
        }else{
            const error =  new Error();
            error.message = result.message || 'Invalid Data'
            throw error;
        }
    }
    catch(e){
        alert(e);
    }

}
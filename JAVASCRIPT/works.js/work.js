const url = "https://api.npoint.io/65508205158218eced15";
const app = async () =>{
    try {
            const response = await fetch(url);
            console.log(response);
    } catch (error) {
        console.log(error);
    }
}
import  http from "http";
class ContactDataService{
    getAll(){
        return http.get("contact");
    }
}
export default new ContactDataService();

class Recipes {
    constructor(
        baseURI="https://api.edamam.com/api/recipes/v2",
        AppID="5ab05376",
        AppKey= "742700c54825d15f03406d0211acbe0c"
    ) {
        this.baseURI = baseURI
        this.AppID=AppID
        this.AppKey=AppKey
        this.Type="public"
        this.Beta=false
    }

    callQuery(query) {
        var queryCall
        let q = query
        queryCall = this.baseURI + "?type=" + this.Type + "&beta=" + this.Beta.toString() + "&q=" + q + "&app_id=" + this.AppID + "&app_key=" + this.AppKey
        try {
            console.log(queryCall)
            fetch(queryCall).then(Response => {
                Response.json().then(data => {
                    console.log(data)
                })
            })
        } catch(err) {
            console.log("Error calling api:\n")
            console.log(err)
        }
        console.error("query needs string")
        console.log(query)
    }

}

export default Recipes
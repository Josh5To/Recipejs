class Recipes {
    constructor(
        baseURI=process.env.REACT_APP_BASE_URI,
        AppID=process.env.REACT_APP_API_ID,
        AppKey=process.env.REACT_APP_API_KEY
    ) {
        this.baseURI=baseURI
        this.AppID=AppID
        this.AppKey=AppKey
        this.Type="public"
        this.Beta=false
    }

    callQuery = async (query) => {
        var queryCall
        let q = query
        queryCall = this.baseURI + "?type=" + this.Type + "&beta=" + this.Beta.toString() + "&q=" + q + "&app_id=" + this.AppID + "&app_key=" + this.AppKey
        try {
            //console.log(queryCall)
            let response = await fetch(queryCall)
            let recipeData = await response.json()
            return recipeData
        } catch(err) {
            throw err
        }

    }

}

export default Recipes
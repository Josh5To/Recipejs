class Recipes {
    constructor(
    
        baseURI="https://api.edamam.com/api/recipes/v2",
        AppID="5ab05376",
        AppKey= "742700c54825d15f03406d0211acbe0c"
    ) {
        this.baseURI=baseURI,
        this.AppID=AppID,
        this.AppKey=AppKey
    }

    callQuery = () => {
        queryCall = this.baseURI + "?type=" + this.Type + "&beta=" + toString(this.Beta)// + "&q=" + q + "&app_id=" + AppID + "&app_key=" + AppKey
        return queryCall
    }

}

export default Recipes
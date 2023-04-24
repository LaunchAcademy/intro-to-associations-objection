
class BeanieBabySerializer {
    static getSummary(beanieBabies) {

        const requiredAttributes = ["id", "name", "color"]

        const serializedBeanies = beanieBabies.map((beanie) => {
            let serializedBeanie = {}
            for (const attribute of requiredAttributes){
                serializedBeanie[attribute] = beanie[attribute]
            }
            return serializedBeanie
        })

        return serializedBeanies
    }
}

export default BeanieBabySerializer
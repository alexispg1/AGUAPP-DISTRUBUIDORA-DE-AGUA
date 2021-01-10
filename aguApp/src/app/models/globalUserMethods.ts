export class UserMethods{
    
    generateKey():string{
        var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        chars = 5,
        segments = 4,
        keyString = "";
        for(var i = 0; i < segments; i++ ) {
            var segment = "";
            for( var j = 0; j < chars; j++ ) {
                var k =(Math.floor(Math.random() * tokens.length));
                segment += tokens[ k ];
            }
            keyString += segment;
            if( i < ( segments - 1 ) ) {
                keyString += "-";
            }
        }
        return keyString;
    }
}
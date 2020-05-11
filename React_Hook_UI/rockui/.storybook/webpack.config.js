module.export =({config}) => {
    config.module.rules.push({
        test:/\.tsx?$/,
        use:[
            {
                loader:require.resolve("babel-loader"),
                options:{
                    presets:[require.resolve("babel-preset-react-app")]
                }
            },
            {
                loader:require.resolve("react-docgen-typescipt-loader"), 
                options:{
                    shouldExtractLiteralValuesFromEnum:true,
                    propFilter:(prop)=>{
                        if(prop.parent){
                            return !prop.parent.fileName.includs('node_monules')
                        }
                        return true
                    }
                }
            }
          ]
    });
    config.resolve.extensions.push(".ts",".tsx");
    return config;
}
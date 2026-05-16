const { onRequest } = require("firebase-functions/v2/https");
const { MercadoPagoConfig, Preference } = require("mercadopago");

const plans = {
    STARTER:{
        title:"Membresía Starter Cannacore",
        price:8800000
    },
    GROWER:{
        title:"Membresía Grower Cannacore",
        price:22000000
    },
    PRO:{
        title:"Membresía Pro Cannacore",
        price:44000000
    },
    FARM:{
        title:"Membresía Farm Partner Cannacore",
        price:220000000
    }
};

exports.createMercadoPagoPreference = onRequest(
    {
        secrets:["MP_ACCESS_TOKEN"],
        cors:true
    },
    async(req,res)=>{

        if(req.method !== "POST"){
            res.status(405).json({
                error:"Método no permitido"
            });
            return;
        }

        try{

            const { plan, uid, email } = req.body;

            if(!plan || !uid || !plans[plan]){
                res.status(400).json({
                    error:"Plan inválido"
                });
                return;
            }

            const selectedPlan = plans[plan];

            const client = new MercadoPagoConfig({
                accessToken:process.env.MP_ACCESS_TOKEN
            });

            const preference = new Preference(client);

            const result = await preference.create({
                body:{
                    items:[
                        {
                            title:selectedPlan.title,
                            quantity:1,
                            unit_price:selectedPlan.price,
                            currency_id:"COP"
                        }
                    ],
                    payer:{
                        email:email || undefined
                    },
                    external_reference:uid + "_" + plan,
                    metadata:{
                        uid:uid,
                        plan:plan
                    },
                    back_urls:{
                        success:"https://cannacore.org/perfil.html",
                        failure:"https://cannacore.org/planes.html",
                        pending:"https://cannacore.org/planes.html"
                    },
                    auto_return:"approved"
                }
            });

            res.json({
                init_point:result.init_point
            });

        }catch(error){

            console.error(error);

            res.status(500).json({
                error:error.message
            });

        }

    }
);

import {

    auth,
    db,

    doc,
    setDoc

}
from "./firebase.js";

/* =========================
MERCADOPAGO CONFIG
========================= */

const PUBLIC_KEY =
"TU_PUBLIC_KEY";

/* =========================
COMPRAR PLAN
========================= */

window.buyPlan = async function(plan,price){

    const user = auth.currentUser;

    if(!user){

        alert("Debes iniciar sesión");

        return;
    }

    try{

        /* =========================
        SIMULACION PAGO
        ========================= */

        const paymentApproved = true;

        if(paymentApproved){

            await setDoc(doc(db,"users",user.uid),{

                membership:plan,

                amount:price,

                startDate:new Date().toISOString(),

                paymentStatus:"active"

            },{ merge:true });

            alert("Pago aprobado y membresía activada");
        }

    }catch(error){

        alert(error.message);
    }
}

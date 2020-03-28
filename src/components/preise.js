import React from "react"
import styles from "./preise.module.css"


const Preise = () => (
    <div style={{
        marginBottom: `10px`
      }}>
       <div className="row">
           <div className="col-12">
               <div className="container">
               <h1>Preise</h1> 
               </div>
           </div>
       </div>
     
        <div className="row">
            <div className="col-6">
            <div className="container">

                <h2>Fuß- und Handpflege</h2>
                <table 
                // style="width:100%"
                >
                    <tr>
                      <th>Leistung</th>
                      <th>Preis</th>
                    </tr>
                    <tr>
                      <td>Med. Fußpflege</td>
                      <td>23,00€</td>
                    </tr>
                    <tr>
                      <td>Med. Fußpflege mit Lack</td>
                      <td>26,00€</td>
                    </tr>
                    <tr>
                      <td>Maniküre</td>
                      <td>23,00€</td>
                    </tr>
                    <tr>
                      <td>Maniküre mit French Lack</td>
                      <td>29,00€</td>
                    </tr>
                    <tr>
                      <td>Pediküre</td>
                      <td>28,00€</td>
                    </tr>
                    <tr>
                      <td>Pediküre mit French Lack</td>
                      <td>34,00€</td>
                    </tr>
                    <tr>
                      <td>French Lack (Hände & Füße)</td>
                      <td>15,00€</td>
                    </tr>
                    <tr>
                      <td>Lack (Hände & Füße)</td>
                      <td>12,00€</td>
                    </tr>
                    <tr>
                      <td>Maniküre & Pediküre</td>
                      <td>50,00€</td>
                    </tr>
                    <tr>
                      <td>Maniküre & Pediküre mit French Lack</td>
                      <td>60,00€</td>
                    </tr>
                    <tr>
                      <td>Shellac</td>
                      <td>25,00€</td>
                    </tr>
                    <tr>
                      <td>Shellac & Maniküre</td>
                      <td>45,00€</td>
                    </tr>
                </table> 
            </div>
            </div> 

            <div className="col-6">
            <div className="container">
                <h2>Nageldesign</h2>
                <table 
                // style="width:100%"
                >
                    <tr>
                      <th>Leistung</th>
                      <th>Preis</th>
                    </tr>
                    <tr>
                      <td>Neumodellage Biogel</td>
                      <td>50,00€</td>
                    </tr>
                    <tr>
                      <td>Neumodellage</td>
                      <td>40,00€</td>
                    </tr>
                    <tr>
                      <td>Biogel auffüllen</td>
                      <td>40,00€</td>
                    </tr>
                    <tr>
                      <td>Auffüllen (French oder Natur)</td>
                      <td>33,00€</td>
                    </tr>
                    <tr>
                      <td>Auffüllen mit Farbe</td>
                      <td>35,00€</td>
                    </tr>
                    <tr>
                      <td>Hand- und Zehenmodellage Biogel</td>
                      <td>60,00€</td>
                    </tr>
                    <tr>
                      <td>Hand- und Zehennagelmodellage</td>
                      <td>50,00€</td>
                    </tr>
                    <tr>
                      <td>Shellac</td>
                      <td>25,00€</td>
                    </tr>
                    <tr>
                      <td>Nagelreparatur pro Stk</td>
                      <td>2,50€</td>
                    </tr>
                    <tr>
                      <td>Handdesign pro Stk</td>
                      <td>2,00€</td>
                    </tr>
                    <tr>
                      <td>Strasssteine oder Aufkleber pro Stk</td>
                      <td>1,00€</td>
                    </tr>
                </table> 
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <div className="container">
                <h2>Kosmetik</h2>
                <h3>Haarentfernung nach orientalischer Fadentechnik</h3>
               
                <table 
                // style="width:100%"
                >
                    <tr>
                      <th>Leistung</th>
                      <th>Preis</th>
                    </tr>
                    <tr>
                      <td>Oberlippe</td>
                      <td>6,00€</td>
                    </tr>
                    <tr>
                      <td>Kinn & Oberlippe</td>
                      <td>9,00€</td>
                    </tr>
                    <tr>
                      <td>Gesicht & Augenbrauen</td>
                      <td>18,00€</td>
                    </tr>
                    <tr>
                      <td>Augenbrauenkorrektur ab</td>
                      <td>8,00€</td>
                    </tr>
                    <tr>
                      <td>Augenbrauen färben</td>
                      <td>8,00€</td>
                    </tr>
                    <tr>
                      <td>Wimpern färben</td>
                      <td>10,00€</td>
                    </tr>
                </table> 

                <h3>Massage</h3>
                <table>
                    <tr>
                      <th>Leistung</th>
                      <th>Preis</th>
                    </tr>
                    <tr>
                      <td>Gesicht- und Nackenmassage <br/> (30 Min.) </td>
                      <td>35,00€</td>
                    </tr>
                    <tr>
                      <td>Wellness-Rückenmassage <br/> (20 Min.) </td>
                      <td>28,00€</td>
                    </tr>
                </table>

                <h3>Hautreinigung</h3>
                <table>
                    <tr>
                      <th>Leistung</th>
                      <th>Preis</th>
                    </tr>
                    <tr>
                      <td>Spezielle Tiefenreinigung: <br/> Reinigung, Peeling, Bedampfung, Maske & Tagespflege</td>
                      <td>30,00€</td>
                    </tr>
                    <tr>
                      <td>Klassik-Behandlung: <br/> Reinigung, Peeling, Bedampfung, Ausreinigung, Wirkstoffampulle, Gesicht- und Nackenmassage, Maske, Augenbrauenkorrektur & Tagespflege </td>
                      <td>48,00€</td>
                    </tr>
                    <tr>
                      <td>Luxus-Reinigung: <br/> Peeling, Bedampfung, Ausreinigung, Wirkstoffampulle, Gesicht- und Nackenmassage, Maske, Augenbrauchenkorrektur, Wimpern färben, Haarentfernung Oberlippe u. Kinn (Fadentechnik), Tagespflege & Makeup  </td>
                      <td>60,00€</td>
                    </tr>
                </table>
            </div>
            </div>

            <div className="col-6">
            <div className="container">
                <h2>Waxing</h2>
                <table 
                // style="width:100%"
                >
                    <tr>
                        <th></th>
                        <th>Damen</th>
                        <th>Herren</th>
                    </tr>
                    <tr>
                      <th>Leistung</th>
                      <th>Preis</th>
                      <th>Preis</th>
                    </tr>
                    <tr>
                      <td>Oberlippe</td>
                      <td>7,00€</td>
                      <td>12,00€</td>
                    </tr>
                    <tr>
                      <td>Kinn</td>
                      <td>7,00€</td>
                      <td>12,00€</td>
                    </tr>
                    <tr>
                      <td>Wangen</td>
                      <td>8,00€</td>
                      <td>14,00€</td>
                    </tr>
                    <tr>
                      <td>Achseln</td>
                      <td>12,00€</td>
                      <td>15,00€</td>
                    </tr>
                    <tr>
                      <td>Arme</td>
                      <td>18,00€</td>
                      <td>28,00€</td>
                    </tr>
                    <tr>
                      <td>Oberarme</td>
                      <td>11,00€</td>
                      <td>15,00€</td>
                    </tr>
                    <tr>
                      <td>Unterarme</td>
                      <td>12,00€</td>
                      <td>18,00€</td>
                    </tr>
                    <tr>
                      <td>Hand & Finger</td>
                      <td>7,00€</td>
                      <td>9,00€</td>
                    </tr>
                    <tr>
                      <td>Brust</td>
                      <td>5,00€</td>
                      <td>18,00€</td>
                    </tr>
                    <tr>
                      <td>Hals</td>
                      <td>8,00€</td>
                      <td>12,00€</td>
                    </tr>
                    <tr>
                      <td>Nacken</td>
                      <td>8,00€</td>
                      <td>12,00€</td>
                    </tr>
                    <tr>
                      <td>Schultern</td>
                      <td>12,00€</td>
                      <td>20,00€</td>
                    </tr>
                    <tr>
                      <td>Schultern & Nacken</td>
                      <td>15,00€</td>
                      <td>26,00€</td>
                    </tr>
                    <tr>
                      <td>Rücken unten</td>
                      <td>12,00€</td>
                      <td>16,00€</td>
                    </tr>
                    <tr>
                      <td>Rücken komplett</td>
                      <td>20,00€</td>
                      <td>35,00€</td>
                    </tr>
                    <tr>
                      <td>Bauch</td>
                      <td>11,00€</td>
                      <td>16,00€</td>
                    </tr>
                    <tr>
                      <td>Brust & Bauch</td>
                      <td>13,00€</td>
                      <td>28,00€</td>
                    </tr>
                    <tr>
                      <td>Beine komplett mit Füßen</td>
                      <td>30,00€</td>
                      <td>42,00€</td>
                    </tr>
                    <tr>
                      <td>Beine komplett</td>
                      <td>28,00€</td>
                      <td>38,00€</td>
                    </tr>
                    <tr>
                      <td>Beine Oberschenkel</td>
                      <td>17,00€</td>
                      <td>25,00€</td>
                    </tr>
                    <tr>
                      <td>Beine Unterschenkel</td>
                      <td>16,00€</td>
                      <td>24,00€</td>
                    </tr>
                    <tr>
                      <td>Füße & Zehen</td>
                      <td>6,00€</td>
                      <td>9,00€</td>
                    </tr>
                    <tr>
                      <td>Bikini-Zone / Leisten-Zone</td>
                      <td>15,00€</td>
                      <td>20,00€</td>
                    </tr>
                    <tr>
                      <td>Triangle</td>
                      <td>25,00€</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Brazilian Holywood Cut</td>
                      <td>30,00€</td>
                      <td>45,00€</td>
                    </tr>
                    <tr>
                      <td>Pobacken (ohne Pofalte)</td>
                      <td>15,00€</td>
                      <td>20,00€</td>
                    </tr>
                    <tr>
                      <td>Pofalte</td>
                      <td>10,00€</td>
                      <td>18,00€</td>
                    </tr>
                    <tr>
                      <td>Po komplett</td>
                      <td>22,00€</td>
                      <td>35,00€</td>
                    </tr>

                </table> 
            </div>
            </div>
        </div>

       
    </div>
       
    
)

export default Preise 

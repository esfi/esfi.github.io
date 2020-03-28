import React from "react"
import styles from "./angebote.module.css"


const Angebote = () => (
    <div style={{
        marginBottom: `10px`
      }}>
       <div className="row">
           <div className="col-12">
               <div className="container">
               <h1>Leistungen</h1> 
               </div>
           </div>
       </div>
     
        <div className="row">
            <div className="col-6">
            <div className="container">

                <h2>Medizinische Fußpflege</h2>
                <p>
                    Als ausgebildete medizinische Fußpflegerin mit jahrelanger Praxiserfahrung bieten wir Ihnen einen umfassenden Service in medizinischer Fußpflege.
                </p>
            </div>
            </div> 

            <div className="col-6">
            <div className="container">
                <h2>Maniküre und Pediküre</h2>
                <p>
                    Tun Sie Ihren Händen und Füßen etwas Gutes. Die profesionelle Maniküre und Pediküre lassen Ihre Nägel in einem neuen Glanz erstrahlen. 
                </p>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <div className="container">
                <h2>Nageldesign</h2>
                <p>
                    Wir stylen Ihre Nägel nach Ihren Wünschen - modern, gepflegt und schön.
                </p>
            </div>
            </div>

            <div className="col-6">
            <div className="container">
                <h2>Massage</h2>
                <p>
                    Bei uns können Sie abschalten und sich entspannen!  
                </p>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <div className="container">
                <h2>Waxing</h2>
                <p>
                Mit einem sanften Waxing entfernen wir Ihre Haar -  von Augenbrauen bis zum Intimbereich.
        Sie werden überrascht sein wie einfach der Weg zu einer glatten und perfekten Haut sein kann!
                </p>
            </div>
            </div>

            <div className="col-6">
            <div className="container">
            <h2>Kosmetik </h2>
                <p>
                Unsere Kosmetikerin bietet Ihnen eine fachkundige Analyse und individuelle Beratung angepasst an Ihre Bedürfnisse und Wünsche. 

                </p>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <div className="container">
            <h2>Ihre Vorteile </h2>
                <ul className={styles.vorteile}>
                    <li>
                        <p>Wir nehmen uns Zeit für Sie </p>
                    </li>
                    <li>
                        Wir beraten Sie gerne ausführlich
                    </li>
                    <li>
                        Wir achten sehr auf Hygiene und Sauberkeit
                    </li>
                    <li>
                        Wir arbeiten mit Sorgfalt und modernen Geräten
                    </li>
                </ul>
            </div>
            </div>

            <div className="col-6">
            <div className="container">
                
            </div>
            </div>
        </div>
       
    </div>
)

export default Angebote 

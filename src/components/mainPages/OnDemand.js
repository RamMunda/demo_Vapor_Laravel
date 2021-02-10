import ondemand_icon1 from '../../images/ondemand_icon1.svg';
import ondemand_icon2 from '../../images/ondemand_icon2.svg';
console.log(ondemand_icon1,ondemand_icon2);
const OnDemand = () => {
    return ( 
        <>
        <div className="ondemand">
            <div className="ondemand_container">
                <div className="ondemand_content">
                    <div className="ondemand_header">
                        <h1>On-demand auto-scaling with zero server maintenance.</h1>
                        <p>You have to see it to believe it. Watch your web application and workers scale within seconds based on demand.</p>

                    </div>
                    <div className="ondemand_header_content1">
                        <div className="ondemand_icon1_pic">
                            <img src={ondemand_icon1} alt="" />
                        </div>
                        <div className="ondemand_icon1_content">
                            <h1>Databases</h1>
                            <p>Vapor isn't just about deployments. Create, manage, scale, and even restore your traditional and serverless databases directly from Vapor's intuitive dashboard.</p>
                        </div>
                    </div>
                    <div className="ondemand_header_content2">
                         <div className="ondemand_icon2_pic">
                            <img src={ondemand_icon2} alt="" />
                         </div>
                         <div className="ondemand_icon1_content">
                            <h1>Caches</h1>
                            <p>Need data fast? Vapor makes it a breeze to create and manage ElastiCache Redis clusters. Need even more speed? Let Vapor scale your cache while you kick back and relax.</p>
                        </div>                   
                    </div>
                </div>
                <div className="ondemand_pic">
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default OnDemand;
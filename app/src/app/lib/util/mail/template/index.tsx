import { HTMLAttributes, ReactNode } from "react";
import { renderToString } from "react-dom/server";

export default class EmailTemplate
{
    public static Teste(): ReactNode
    {
        return <this.MountTemplate template={
            <div>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Est facilisi viverra pellentesque inceptos senectus vitae etiam vulputate. Dictumst primis dignissim suscipit etiam habitasse sit sit parturient. Vel efficitur vel id purus velit auctor morbi himenaeos.
            </div>
        } />
    }

    private static MountTemplate({template}: {template: ReactNode}): ReactNode
    {
        return (
            <div style={{border: "1px solid black"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "left", backgroundColor: 'black', textAlign: 'center'}}>
                    <a title="TalkSpace" href="https://talkspace-ten.vercel.app/"><img style={{width: "200px"}} src={'https://talkspace-ten.vercel.app/_next/image?url=%2Flogo%2Ftalkspace-logo.png&w=640&q=75'} alt="talkspace-logo" /></a>
                </div>
                <div style={{padding: "20px", backgroundColor: "white", margin: "20px"}}>
                    {template}
                </div>
                <div>
                    <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ padding: '30px', backgroundColor: 'black', textAlign: 'left', color: '#6b7280', fontFamily: 'Arial, sans-serif' }}>
                        <tr>
                            <td>
                                <p style={{ fontSize: '14px', margin: '0' }}>© {new Date().getFullYear()} TalkSpace. All rights reserved.</p>
                                <p style={{ fontSize: '12px', margin: '20px 0 20px' }}>
                                    <a href="https://talkspace-ten.vercel.app/auth/signin" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#4f46e5', color: '#ffffff', textDecoration: 'none', borderRadius: '5px', marginRight: "5px" }}>
                                        Sign in
                                    </a>
                                    <a href="https://talkspace-ten.vercel.app/auth/signup" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'gray', color: '#ffffff', textDecoration: 'none', borderRadius: '5px', marginLeft: "5px" }}>
                                        Sign up
                                    </a>
                                </p>
                                <p style={{margin: "20px 0px"}}>
                                    <a title="Instagram" href="https://www.instagram.com/mike9_73?igsh=MXF0OWc5NDJmdDRwZg=="><img style={{width: "30px", height: "30px", borderRadius: "50%", marginRight: "5px"}} src="https://static.vecteezy.com/system/resources/previews/023/986/514/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="instagram" /></a>
                                    <a title="Facebook" href="https://www.facebook.com/mike.pascal.967?mibextid=ZbWKwL"><img style={{width: "30px", height: "30px", borderRadius: "50%", marginRight: "5px", marginLeft: "5px"}} src="https://static.vecteezy.com/system/resources/previews/023/741/223/non_2x/facebook-logo-icon-social-media-icon-free-png.png" alt="facebook" /></a>
                                    <a title="Telegram" href="https://t.me/mikeprogrammer973"><img style={{width: "30px", height: "30px", borderRadius: "50%", marginRight: "5px", marginLeft: "5px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="telegram" /></a>
                                    <a title="GitHub" href="https://github.com/Mikeprogrammer973"><img style={{width: "30px", height: "30px", borderRadius: "50%", marginLeft: "5px"}} src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" alt="github" /></a>
                                </p>
                                <p style={{ fontSize: '12px', margin: '5px 0 0' }}>
                                    <a href="#" style={{ color: '#4f46e5', textDecoration: 'none' }}>Privacy Policy</a>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

    public static getTemplate(template: ReactNode): string
    {
        return renderToString(template)
    }
}
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
            <div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#f3f4f6', textAlign: 'center', marginBottom: "40px"}}>
                    <a href="https://talkspace-ten.vercel.app/"><img style={{width: "200px"}} src={'https://talkspace-ten.vercel.app/_next/image?url=%2Flogo%2Ftalkspace-logo.png&w=640&q=75'} alt="talkspace-logo" /></a>
                </div>
                <div style={{padding: "10px"}}>
                    {template}
                </div>
                <div>
                <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f3f4f6', textAlign: 'left', color: '#6b7280', fontFamily: 'Arial, sans-serif' }}>
                    <tr>
                        <td>
                            <p style={{ fontSize: '14px', margin: '0' }}>© {new Date().getFullYear()} TalkSpace. All rights reserved.</p>
                            <p style={{ fontSize: '12px', margin: '20px 0 20px' }}>
                                <a href="https://talkspace-ten.vercel.app/auth/signin" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#4f46e5', color: '#ffffff', textDecoration: 'none', borderRadius: '5px' }}>
                                Sign in
                                </a>
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
import { ReactNode } from "react"
import { renderToString } from "react-dom/server"

export default class EmailTemplate
{
    public static welcomeTemplate(username: string): ReactNode
    {
        return <this.MountTemplate template={
            <div>
                 <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', color: '#333333' }}>
                    <tr>
                    <td style={{ textAlign: 'center', wordBreak: "break-word" }}>
                        <h2 style={{ color: '#4f46e5' }}>Welcome to TalkSpace, {username}!</h2>
                        <p style={{ fontSize: '16px', lineHeight: '24px', margin: '20px 0' }}>
                            We're excited to have you join our community. TalkSpace is a place where you can connect, share, and engage with people from all over the world.
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '24px' }}>
                            To get started, simply log in and explore our platform. Whether you're looking to join conversations, create your own groups, or just see what's trending, TalkSpace has something for everyone.
                        </p>
                        <p style={{ fontSize: '16px', margin: '30px 0' }}>
                        <a href="https://talkspace-ten.vercel.app/auth/signin" style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: '#ffffff', textDecoration: 'none', borderRadius: '5px' }}>
                            Log In to TalkSpace
                        </a>
                        </p>
                        <p style={{ fontSize: '14px', color: '#6b7280' }}>If you have any questions, feel free to <a href="#" style={{ color: '#4f46e5', textDecoration: 'none' }}>contact our support team</a>.</p>
                        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>Enjoy your time on TalkSpace!</p>
                    </td>
                    </tr>
                </table>
            </div>
        } />
    }

    public static verifyIdTemplate(username: string, verificationCode: string): ReactNode
    {
        return (
            <this.MountTemplate template={
                <div>
                    <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', padding: '20px', color: '#333333' }}>
                        <tr>
                        <td style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#e53e3e' }}>Security Alert</h1>
                            <p style={{ fontSize: '16px', lineHeight: '24px', margin: '20px 0' }}>
                                Hi {username},
                            </p>
                            <p style={{ fontSize: '16px', lineHeight: '24px', margin: '10px 0' }}>
                                We have detected an attempt to access your TalkSpace account. To verify that this is you, please use the verification code below:
                            </p>
                            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4f46e5', margin: '20px 0' }}>
                            {verificationCode}
                            </p>
                            <p style={{ fontSize: '16px', lineHeight: '24px', margin: '10px 0' }}>
                                If this was not you, please reset your password immediately or <a href="#" style={{ color: '#4f46e5', textDecoration: 'none' }}>contact our support team</a> for assistance.
                            </p>
                            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '20px' }}>
                                Stay safe,<br />The TalkSpace Security Team
                            </p>
                        </td>
                        </tr>
                    </table>
                </div>
            } />
        )
    }

    public static notificationMsgTemplate(username: string, notifications: any): ReactNode
    {
        return (
            <this.MountTemplate template={
                <div>
                    <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', padding: '20px', color: '#333333' }}>
                        <tr>
                        <td style={{ textAlign: 'left' }}>
                            <h1 style={{ color: '#4f46e5' }}>Hello, {username}!</h1>
                            <p style={{ fontSize: '16px', lineHeight: '24px', margin: '20px 0' }}>
                                You have new notifications on TalkSpace:
                            </p>
                            <table width="100%" style={{ margin: '0 auto', maxWidth: '600px' }}>
                            {notifications.newFollower && (
                                <tr>
                                <td style={{ fontSize: '16px', padding: '10px 0', textAlign: 'left' }}>
                                    👤 <strong>{notifications.newFollower}</strong> started following you.
                                </td>
                                </tr>
                            )}
                            {notifications.mentioned && (
                                <tr>
                                <td style={{ fontSize: '16px', padding: '10px 0', textAlign: 'left' }}>
                                    💬 You were mentioned in a {notifications.mentioned.context} by <strong>{notifications.mentioned.by}</strong>.
                                </td>
                                </tr>
                            )}
                            {notifications.postLike && (
                                <tr>
                                <td style={{ fontSize: '16px', padding: '10px 0', textAlign: 'left' }}>
                                    👍 Your {notifications.postLike.type} received a like from <strong>{notifications.postLike.by}</strong>.
                                </td>
                                </tr>
                            )}
                            {notifications.comment && (
                                <tr>
                                <td style={{ fontSize: '16px', padding: '10px 0', textAlign: 'left' }}>
                                    🗨️ <strong>{notifications.comment.by}</strong> commented on your {notifications.comment.context}.
                                </td>
                                </tr>
                            )}
                            {notifications.newMessage && (
                                <tr>
                                <td style={{ fontSize: '16px', padding: '10px 0', textAlign: 'left' }}>
                                    📩 You received a new message from <strong>{notifications.newMessage}</strong>.
                                </td>
                                </tr>
                            )}
                            {notifications.friendRequest && (
                                <tr>
                                <td style={{ fontSize: '16px', padding: '10px 0', textAlign: 'left' }}>
                                    🤝 <strong>{notifications.friendRequest}</strong> sent you a follow request.
                                </td>
                                </tr>
                            )}
                            </table>
                            <p style={{ fontSize: '16px', margin: '30px 0' }}>
                            <a href="https://talkspace-ten.vercel.app/notifications" style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: '#ffffff', textDecoration: 'none', borderRadius: '5px' }}>
                                View Notifications
                            </a>
                            </p>
                            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '20px' }}>
                            Stay connected on TalkSpace,<br />The TalkSpace Team
                            </p>
                        </td>
                        </tr>
                    </table>
                </div>
            } />
        )
    }

    public static resetPasswordTemplate(username: string, resetLink: string)
    {
        return (
            <this.MountTemplate template={
                <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333333', padding: '20px', margin: '0 auto', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'purple' }}>
                        Reset Your Password
                    </h2>
                    <p style={{ fontSize: '16px', color: '#333333', lineHeight: '1.6', marginBottom: '20px' }}>
                        Hello, {username}! <br /><br />
                        We received a request to reset the password for your account. Click the button below to reset it:
                    </p>
                    <a
                        href={resetLink}
                        style={{
                        display: 'block',
                        maxWidth: '200px',
                        margin: '20px auto',
                        padding: '5px 10px',
                        textAlign: 'center',
                        color: '#ffffff',
                        backgroundColor: '#1a73e8',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontSize: '16px'
                        }}
                    >
                        Reset Password
                    </a>
                    <p style={{ fontSize: '16px', color: '#333333', lineHeight: '1.6', marginBottom: '20px' }}>
                        If you did not request this, please ignore this email or <a href="#" style={{ color: '#4f46e5', textDecoration: 'none' }}>contact our support team</a> if you have any concerns.
                    </p>
                </div>
            } />
        )
    }

    private static MountTemplate({template}: {template: ReactNode}): ReactNode
    {
        return (
            <div style={{border: "1px solid black"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "left", backgroundColor: 'black', textAlign: 'center'}}>
                    <a title="TalkSpace" href="https://talkspace-ten.vercel.app/"><img style={{width: "200px"}} src={'https://talkspace-ten.vercel.app/_next/image?url=%2Flogo%2Ftalkspace-logo.png&w=640&q=75'} alt="talkspace-logo" /></a>
                </div>
                <div style={{padding: "10px", backgroundColor: "white", margin: "20px"}}>
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
                                <p style={{ fontSize: '14px', margin: '5px 0 0' }}>
                                    <a href="https://talkspace-ten.vercel.app/info/privacy-policy" style={{ color: '#4f46e5', textDecoration: 'none' }}>Privacy Policy</a>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

    public static getTemplate(template: ReactNode)
    {
        return renderToString(template)
    }
}
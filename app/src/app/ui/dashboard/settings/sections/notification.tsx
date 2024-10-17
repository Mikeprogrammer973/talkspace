
export default function NotificationsSection() {
    return  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300">
    <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

    {/* Notificações de Seguidores */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">New Followers</h3>
      <p className="text-sm text-gray-400">
        Receive a notification when someone follows you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">App Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Email Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Push Notification</span>
        </label>
      </div>
    </div>

    {/* Notificações de Menções */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Mentions</h3>
      <p className="text-sm text-gray-400">
        Get notified when someone mentions you in a comment or post.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">App Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Email Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Push Notification</span>
        </label>
      </div>
    </div>

    {/* Notificações de Curtidas */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Likes</h3>
      <p className="text-sm text-gray-400">
        Receive a notification when someone likes your post or comment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">App Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Email Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Push Notification</span>
        </label>
      </div>
    </div>

    {/* Notificações de Comentários */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Comments</h3>
      <p className="text-sm text-gray-400">
        Get notified when someone comments on your post or reply.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">App Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Email Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Push Notification</span>
        </label>
      </div>
    </div>

    {/* Notificações de Mensagens */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Messages</h3>
      <p className="text-sm text-gray-400">
        Receive a notification when someone sends you a new message.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">App Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Email Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Push Notification</span>
        </label>
      </div>
    </div>

    {/* Notificações de Convites de Amizade */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Follow Requests</h3>
      <p className="text-sm text-gray-400">
        Receive a notification when someone sends you a follow request.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">App Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Email Notification</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-white">Push Notification</span>
        </label>
      </div>
    </div>
  </div>
}
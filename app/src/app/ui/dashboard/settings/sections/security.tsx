
export default function SecuritySection() {
    return <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300">
    <h2 className="text-2xl font-semibold mb-4">Security</h2>

    {/* Alterar senha */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Change Password</h3>
      <div>
        <label className="block text-sm font-medium">Current Password</label>
        <input
          type="password"
          className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">New Password</label>
        <input
          type="password"
          className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Confirm New Password</label>
        <input
          type="password"
          className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        className="bg-red-600 w-full sm:w-auto text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 focus:ring-2 focus:ring-red-500"
      >
        Update Password
      </button>
    </div>

    {/* Autenticação de dois fatores */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Two-Factor Authentication (2FA)</h3>
      <p className="text-sm text-gray-400">
        Add an extra layer of security to your account by enabling 2FA.
      </p>
      <button
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
      >
        Enable 2FA
      </button>
    </div>

    {/* Sessões ativas */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Active Sessions</h3>
      <p className="text-sm text-gray-400">
        Manage the devices currently logged into your account.
      </p>
      <ul className="space-y-2">
        <li className="bg-gray-700 p-4 rounded-lg flex flex-wrap gap-5 justify-between items-center">
          <div>
            <p className="text-white font-medium">Chrome on Windows</p>
            <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
          </div>
          <button
            className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Log out
          </button>
        </li>
        {/* Outras sessões ativas */}
      </ul>
    </div>

    {/* Dispositivos confiáveis */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-medium">Trusted Devices</h3>
      <p className="text-sm text-gray-400">
        Revoke devices you've trusted for faster login without verification codes.
      </p>
      <ul className="space-y-2">
        <li className="bg-gray-700 p-4 rounded-lg flex flex-wrap gap-5 justify-between items-center">
          <div>
            <p className="text-white font-medium">iPhone 13 Pro</p>
            <p className="text-sm text-gray-400">Trusted on: September 15, 2024</p>
          </div>
          <button
            className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Revoke Trust
          </button>
        </li>
        {/* Outros dispositivos confiáveis */}
      </ul>
    </div>

    {/* Security logs */}
    <div className="space-y-4 mb-8">
        <h3 className="text-lg font-medium">Security Logs</h3>
        <ul className="space-y-2">
        <li className="text-sm text-gray-400">Logged in from New York, NY on October 15, 2024</li>
        <li className="text-sm text-gray-400">Logged out from Los Angeles, CA on October 10, 2024</li>
        </ul>
    </div>

    {/* Segurança avançada */}
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-red-500">Advanced Security Options</h3>
      <p className="text-sm text-gray-400">
        Take extreme measures to protect your account or remove access entirely.
      </p>

        {/* Dados */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-wrap gap-5 justify-between items-center">
            <div>
                <h4 className="text-white font-medium">Data Management</h4>
                <p className="text-sm text-gray-400">Download your data or delete specific information.</p>
            </div>
            <p className="flex flex-wrap gap-3 justify-between items-center">
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg mb-2">Download My Data</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg">Delete My Account Data</button>
            </p>
        </div>

      {/* Suspender Conta */}
      <div className="bg-gray-700 p-4 rounded-lg flex flex-wrap gap-5 justify-between items-center">
        <div>
          <h4 className="text-white font-medium">Suspend Account</h4>
          <p className="text-sm text-gray-400">
            Temporarily disable your account. You can reactivate it later.
          </p>
        </div>
        <button
          className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-all duration-300"
        >
          Suspend Account
        </button>
      </div>

        {/* Remover Conta */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-wrap gap-5 justify-between items-center">
            <div>
                <h4 className="text-white font-medium">Delete Account</h4>
                <p className="text-sm text-gray-400">
                    Permanently remove your account and all associated data. This action cannot be undone.
                </p>
            </div>
            <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
            Delete Account
            </button>
        </div>

        {/* Pagamento */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-wrap gap-5 justify-between items-center">
            <div>
                <h4 className="text-white font-medium">Payment Settings</h4>
                <p className="text-sm text-gray-400">Manage your payment methods and subscriptions.</p>
            </div>
            <p className="flex flex-wrap gap-3 justify-between items-center">
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg mb-2">Add Payment Method</button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-lg">View Transaction History</button>
            </p>
        </div>
    </div>
  </div>
}
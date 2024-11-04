import { Preference } from '@prisma/client';
import React, { useState } from 'react';

type NotificationOption = {
  app: boolean;
  email: boolean;
  popup: boolean;
};

type Mentions = {
  comments: NotificationOption;
  posts: NotificationOption;
  likes: NotificationOption;
};

type Messages = {
  directMessage: NotificationOption;
  friendRequest: NotificationOption;
  follow: NotificationOption;
};

export default function NotificationsSection({prefs}: {prefs: Preference}){
  const [mentions, setMentions] = useState<Mentions>({
    comments: { app: false, email: false, popup: false },
    posts: { app: false, email: false, popup: false },
    likes: { app: false, email: false, popup: false },
  });

  const [messages, setMessages] = useState<Messages>({
    directMessage: { app: false, email: false, popup: false },
    friendRequest: { app: false, email: false, popup: false },
    follow: { app: false, email: false, popup: false },
  });

  const handleMentionsChange = (event: React.ChangeEvent<HTMLInputElement>, option: keyof Mentions) => {
    const { name, checked } = event.target;
    setMentions((prev) => ({
      ...prev,
      [option]: {
        ...prev[option],
        [name]: checked,
      },
    }));
  };

  const handleMessagesChange = (event: React.ChangeEvent<HTMLInputElement>, option: keyof Messages) => {
    const { name, checked } = event.target;
    setMessages((prev) => ({
      ...prev,
      [option]: {
        ...prev[option],
        [name]: checked,
      },
    }));
  };

  console.log(mentions, messages)

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

      {/* Mentions Category */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Mentions</h3>
        {Object.keys(mentions).map((option) => (
          <div key={option} className="mb-4">
            <h4 className="font-medium mb-2 capitalize text-gray-100">{option}</h4>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 text-gray-300">
              <label className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="app"
                  checked={mentions[option as keyof Mentions].app}
                  onChange={(e) => handleMentionsChange(e, option as keyof Mentions)}
                  className="mr-2"
                />
                App Notification
              </label>
              <label className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="email"
                  checked={mentions[option as keyof Mentions].email}
                  onChange={(e) => handleMentionsChange(e, option as keyof Mentions)}
                  className="mr-2"
                />
                Email Notification
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="popup"
                  checked={mentions[option as keyof Mentions].popup}
                  onChange={(e) => handleMentionsChange(e, option as keyof Mentions)}
                  className="mr-2"
                />
                Pop-up Notification
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Messages Category */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Messages</h3>
        {Object.keys(messages).map((option) => (
          <div key={option} className="mb-4">
            <h4 className="font-medium mb-2 capitalize text-gray-100">{option}</h4>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 text-gray-300">
              <label className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="app"
                  checked={messages[option as keyof Messages].app}
                  onChange={(e) => handleMessagesChange(e, option as keyof Messages)}
                  className="mr-2"
                />
                App Notification
              </label>
              <label className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="email"
                  checked={messages[option as keyof Messages].email}
                  onChange={(e) => handleMessagesChange(e, option as keyof Messages)}
                  className="mr-2"
                />
                Email Notification
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="popup"
                  checked={messages[option as keyof Messages].popup}
                  onChange={(e) => handleMessagesChange(e, option as keyof Messages)}
                  className="mr-2"
                />
                Pop-up Notification
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
;

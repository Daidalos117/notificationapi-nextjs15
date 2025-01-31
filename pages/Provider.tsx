'use client'

import { NotificationAPIProvider } from '@notificationapi/react';

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    return (
        <NotificationAPIProvider
            userId={"111"}
            clientId={ "hehw8qcm9iyljk69r8i7nxt0pm"}

        >
            {children}
        </NotificationAPIProvider>
    );
}

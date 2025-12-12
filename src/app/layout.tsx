import { Metadata } from 'next'
import "../../tailwind.css"

export const metadata: Metadata = {
    title: "Life Care Pro Corp",
    description: 'My App is a...',
}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}

export default layout
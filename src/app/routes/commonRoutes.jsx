import Chats from '../../features/chats/ui/pages/Chats'
import Home from '../../features/dashboard/ui/pages/Home'
import Settings from '../../features/settings/ui/pages/Settings'


export  let commonRoutes = [
    {
        path : "",
        element : <Home />
    },
    {
        path : "setting",
        element : <Settings />
    },
    {
        path : "chats",
        element : <Chats />
    }
] 
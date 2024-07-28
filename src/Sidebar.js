import * as React from 'react';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCutIcon from '@mui/icons-material/ContentCut';
// import ContentCopy from '@mui/icons-material/ContentCopy';
// import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SidebarMenu() {
    return (
        <div className="sidebar-menu">
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>剪切</ListItemText>
                </MenuItem>
                {/* <MenuItem>
                    <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>复制</ListItemText>
                </MenuItem> */}
                {/* <MenuItem>
                    <ListItemIcon>
                        <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>粘贴</ListItemText>
                </MenuItem> */}
                <Divider />
                {/* <MenuItem>
                    <ListItemIcon>
                        <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Web 剪贴板</ListItemText>
                </MenuItem> */}
            </MenuList>
            {/* <div className="account-menu">
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>账户</ListItemText>
                </MenuItem>
            </div> */}
        </div>
    );
}
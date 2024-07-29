import * as React from 'react';
import { MenuList, MenuItem, ListItemIcon, ListItemText, Divider, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './logo.svg';

export default function SidebarMenu() {
    return (
        <>
            <div className="logo-container">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <MenuList className="sidebar-menu">
                <Tooltip title="主页" placement="top-start">
                    <MenuItem>
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>主页</ListItemText>
                    </MenuItem>
                </Tooltip>

                <Tooltip title="新建提示词" placement="top-start">
                    <MenuItem>
                        <ListItemIcon>
                            <ControlPointIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>新建</ListItemText>
                    </MenuItem>
                </Tooltip>
                <Tooltip title="学习文档" placement="top-start">
                    <MenuItem>
                        <ListItemIcon>
                            <MenuBookIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>文档</ListItemText>
                    </MenuItem>
                </Tooltip>
                <Tooltip title="系统设置" placement="top-start">
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>设置</ListItemText>
                    </MenuItem>
                </Tooltip>
                <Divider />
                <div className="account-menu">
                    <MenuItem>
                        <ListItemIcon>
                            <AccountCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>账户</ListItemText>
                    </MenuItem>
                </div>
            </MenuList >
        </>
    );
}
可以暂时先把这个提示关闭掉

$ sudo vi /etc/default/apport

找到第4行 修改为

enabled=0

保存退出

附linux中各个日志文件

/var/log/alternatives.log-更新替代信息都记录在这个文件中

/var/log/apport.log -应用程序崩溃记录

/var/log/apt/ -用apt-get安装卸载软件的信息

/var/log/auth.log -登录认证log

/var/log/boot.log -包含系统启动时的日志。

/var/log/btmp -记录所有失败启动信息

/var/log/Consolekit - 记录控制台信息

/var/log/cpus - 涉及所有打印信息的日志

/var/log/dist-upgrade - dist-upgrade这种更新方式的信息

/var/log/dmesg -包含内核缓冲信息(kernel ringbuffer)。在系统启动时，显示屏幕上的与硬件有关的信息

/var/log/dpkg.log - 包括安装或dpkg命令清除软件包的日志。

/var/log/fontconfig.log -与字体配置有关的log。

/var/log/fsck - 文件系统日志

/var/log/kern.log –包含内核产生的日志，有助于在定制内核时解决问题。

/var/log/lastlog —记录所有用户的最近信息。这不是一个ASCII文件，因此需要用lastlog命令查看内容。

/var/log/faillog –包含用户登录失败信息。此外，错误登录命令也会记录在本文件中。

/var/log/mail/ – 这个子目录包含邮件服务器的额外日志。

/var/log/mail.err -类似于上面的

/var/log/samba/ –包含由samba存储的信息。

/var/log/wtmp —包含登录信息。使用wtmp可以找出谁正在登陆进入系统，谁使用命令显示这个文件或信息等。

/var/log/xorg.*.log— 来自X的日志信息。

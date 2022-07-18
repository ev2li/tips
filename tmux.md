查看prefix现有绑定键：
tmux show-options -g | grep prefix
常用快捷键
会话管理　
常用命令

tmux      创建session
tmux new　　创建默认名称的会话（在tmux命令模式使用new命令可实现同样的功能，其他命令同理，后文不再列出tmux终端命令）

tmux new -s mysession　　创建名为mysession的会话
tmux ls　　显示会话列表
tmux a　　连接上一个会话(最后创建的那个会话)
tmux a -t session_name　　连接指定会话,session_name 会话名
tmux rename -t s1 s2　　重命名会话s1为s2
tmux kill-session　　关闭上次打开的会话
tmux kill-session -t s1　　关闭会话s1
tmux kill-session -a -t s1　　关闭除s1外的所有会话
tmux kill-server　　关闭所有会话

常用快捷键
prefix d　　退出当前session,当前窗口在后台运行
prefix s　　列出会话，可进行切换
prefix $　　重命名会话
prefix D　　分离指定会话

窗口管理
prefix c　　创建一个新窗口
prefix ,　　重命名当前窗口
prefix w　　列出所有窗口，可进行切换
prefix n　　进入下一个窗口
prefix p　　进入上一个窗口
prefix l　　进入之前操作的窗口  /在相邻的两个window里切换
prefix 0~9　　选择编号0~9对应的窗口
prefix .　　修改当前窗口索引编号
prefix '　　切换至指定编号（可大于9）的窗口
prefix f　　根据显示的内容搜索窗格/多个window里搜索关键字
prefix &　　关闭/删除当前窗口
其他命令
tmux list-key　　列出所有绑定的键，等同于prefix ?
tmux list-command　　列出所有命令
//创建window
Ctrl+b +c

//删除window
Ctrl+b &

//下一个window
Ctrl+b n

//上一个window
Ctrl+b p

//重命名window
Ctrl+b ,

//在多个window里搜索关键字
Ctrl+b f

//在相邻的两个window里切换
Ctrl+b l

分屏
窗格管理--分屏
使用tmux分屏（既可以左右分屏，也可以上下分屏）
prefix %　　左右分屏，水平方向创建窗格
prefix "　　上下分屏，垂直方向创建窗格
prefix Up|Down|Left|Right　　根据箭头方向切换窗格
prefix q　　显示窗格编号
prefix o　　切换屏幕，顺时针切换窗格
prefix }　　与下一个窗格交换位置
prefix {　　与上一个窗格交换位置
prefix x　　关闭当前窗格
prefix space(空格键)　　上下分屏与左右分屏切换，重新排列当前窗口下的所有窗格
prefix !　　将当前窗格置于新窗口
prefix Ctrl+o　　逆时针旋转当前窗口的窗格
prefix t　　在当前窗格显示时间
prefix z　　放大当前窗格(再次按下将还原)
prefix i　　显示当前窗格信息

//创建pane
//横切split pane horizontal
Ctrl+b ” (问号的上面，shift+’)

//竖切split pane vertical
Ctrl+b % （shift+5）

//按顺序在pane之间移动
Ctrl+b o

//上下左右选择pane
Ctrl+b 方向键上下左右

//调整pane的大小
Ctrl+b :resize-pane -U #向上
Ctrl+b :resize-pane -D #向下
Ctrl+b :resize-pane -L #向左
Ctrl+b :resize-pane -R #向右
在上下左右的调整里，最后的参数可以加数字 用以控制移动的大小，例如：
Ctrl+b :resize-pane -D 50

//在同一个window里左右移动pane
Ctrl+b { （往左边，往上面）
Ctrl+b } （往右边，往下面）

//删除pane
Ctrl+b x
//更换pane排版
Ctrl+b “空格”

//移动pane至window
Ctrl+b !

//移动pane合并至某个window
Ctrl+b :join-pane -t $window_name

//显示pane编号
Ctrl+b q

//按顺序移动pane位置
Ctrl+b Ctrl+o

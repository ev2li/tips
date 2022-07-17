:	: "v := value"
anon	anon "fn := func() { ... }"
ap	ap "append(slice, value)"
ap	ap= "a = append(a, value)"
br	br "break"
ch	ch "chan Type"
case	case "case ...:"
con	con "const XXX Type = ..."
cons	cons "const ( ... )"
iota	iota "const ( ... = iota )"
cn	cn "continue"
default	default "default: ..."
df	df "defer someFunction()"
def	def "defer func() { ... }"
defr	defr
gpl	gpl
import	import "import ( ... )"
interface	interface "interface I { ... }"
if	if "if ... { ... }"
else	else
ife	ife "If with inline error"
ew	ew "errors.Wrap"
ewf	ewf "errors.Wrapf"
errn	errn "Error return" !b
errnw	errnw "Error return wrap" !b
errnwf	errnwf "Error return wrapf" !b
errl	errl "Error with log.Fatal(err)" !b
errn,	errn, "Error return with two return values" !b
errn,w	errn,w "Error return wrap with two return values" !b
errn,wf	errn,wf "Error return wrapf with two return values" !b
errp	errp "Error panic" !b
errt	errt "Error test fatal " !b
errh	errh "Error handle and return" !b
json	json "`json:key`"
yaml	yaml "`yaml:key`"
ft	ft "fallthrough"
for	for "for ... { ... }"
fori	fori "for 0..N-1 { ... }"
forr	forr "for k, v := range items { ... }"
forsel	forsel "for select"
selc	selc "select case" !b
func	func "func Function(...) [error] { ... }"
ff	ff "fmt.Printf(...)"
ffh	ffh "fmt.Printf(#...) hash"
fn	fn "fmt.Println(...)"
fe	fe "fmt.Errorf(...)"
few	few "fmt.Errorf(%w, err)"
errnfw	errnfw "Error return fmt.Errorf(%w, err)" !b
lf	lf "log.Printf(...)"
ln	ln "log.Println(...)"
make	make "make(Type, size)"
map	map "map[Type]Type"
main	main "func main() { ... }"
meth	meth "func (self Type) Method(...) [error] { ... }"
ok	ok "if !ok { ... }"
package	package "package ..."
pn	pn "panic()"
rt	rt "return"
select	select "select { case a := <-chan: ... }"
st	st "type T struct { ... }"
switch	switch "switch x { ... }"
tswitch	tswitch "type switch x { ... }"
sp	sp "fmt.Sprintf(...)"
go	go "go someFunc(...)"
gof	gof "go func() { ... }()"
test	test "func TestXYZ(t *testing.T) { ... }"
tt	tt
hf	hf "http.HandlerFunc"
hhf	hhf "mux.HandleFunc" !b
tsrv	tsrv "httptest.NewServer"
ter	ter "if err != nil { t.Errorf(...) }"
terf	terf "if err != nil { t.Fatalf(...) }"
example	example "func ExampleXYZ() { ... }"
benchmark	benchmark "func BenchmarkXYZ(b *testing.B) { ... }"
var	var "var x Type [= ...]"
vars	vars "var ( ... )"
eq	eq "equals: test two identifiers with DeepEqual"
ifae	If actual expected
tr	Test case t.Run

absi	abs for int
maxi	max for int
mini	min for int
maxints	max for ints
joinints	join ints to string
limits	MaxInt and MinInt
treenode	type TreeNode struct
dumptree	Dump Tree using level order
listnode	type ListNode struct
dumplistnode	Dump ListNode using level order
reversearr	Reverse Ints Array
reversestr	Reverse String
pbasic	Basic file for problem
pbinarytree	Binary Tree solution file stub
p1darr	One Dimen Array Basic file stub
p2darr	One Dimen Array Basic file stub
And I have also add some slice tricks as snippet below: taken from SliceTricks

prefix	description
range.map	range map
range.arr	range array, slices
range.str	range interate over unicode points,not bytes
slice.av	Slice Append Vector
slice.copy	Slice Copy
slice.cut	a = append(a[:i], a[j:]...)
slice.delete	a = append(a[:i], a[i+1:]...)
slice.extend	a = append(a, make([]T, j)...)
slice.insert	a = append(a[:i], append([]T{x}, a[i:]...)...)
slice.unshift	a = append([]T{x}, a...)
slice.push	a = append(a, x)
slice.pop	x, a = a[0], a[1:]
slice.popback	x, a = a[len(a) -1], a[:len(a) -1]

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styled from 'styled-components'
import { colors } from '../../../../../../../../styles/colors'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Description</p>',
  })

  return (
    <EditorContainer>
        <MenuBar editor={editor} />
        <EditorContent onChange={() => {console.log("change")}} editor={editor} />
        <button>save</button>
    </EditorContainer>
  )
}

const EditorContainer = styled.div`
    overflow-y: scroll;
    margin: 0px !important;
    max-height: 400px;
    border: solid 2px ${colors.four};

    div:first-of-type{

    }

    div:nth-of-type(2){

        div{
            outline: none;
            background-color: ${colors.four};
        }
    }
`

const MenuBar = ({ editor }) => {
    if (!editor) {
      return null
    }

    const handleSetting = (e, type: string) => {
        e.preventDefault();

        switch(type){
            case 'bold':
                editor.chain().focus().toggleBold().run();
                break;
            case 'italic':
                editor.chain().focus().toggleItalic().run();
                break;
            case 'strike':
                editor.chain().focus().toggleStrike().run()
                break;
            case 'h1':
                editor.chain().focus().toggleHeading({ level: 1 }).run()
                break;
            case 'h2':
                editor.chain().focus().toggleHeading({ level: 2 }).run()
                break;
            case 'h3':
                editor.chain().focus().toggleHeading({ level: 3 }).run()
                break;
            case 'h4':
                editor.chain().focus().toggleHeading({ level: 4 }).run()
                break;
            case 'bulletlist':
                editor.chain().focus().toggleBulletList().run()
                break;
            case 'orderlist':
                editor.chain().focus().toggleOrderedList().run()
                break;
            case 'paragraph':
                editor.chain().focus().setParagraph().run()
                break;
            case 'horizontal':
                editor.chain().focus().setHorizontalRule().run()
                break;
            case 'hardbreak':
                editor.chain().focus().setHardBreak().run()
                break;
                
        }
    }
  
    return (
      <MenuBarContainer>
        <MenuButton
          onClick={(e) => handleSetting(e, 'bold')}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <b>B</b>
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'italic')}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <i>i</i>
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'strike')}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
            <span style={{textDecorationLine: 'line-through', color: "white"}}>strike</span>
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'h1')}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          h1
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'h2')}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          h2
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'h3')}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          h3
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'h4')}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          h4
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'bulletlist')}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          bullet list
        </MenuButton>
        <MenuButton
          onClick={(e) =>  handleSetting(e, 'orderlist')}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          ordered list
        </MenuButton>
        <MenuButton
          onClick={(e) => handleSetting(e, 'paragraph')}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          paragraph
        </MenuButton>
        <MenuButton onClick={(e) =>  handleSetting(e, 'horizontal')}>
          horizontal rule
        </MenuButton>
        <MenuButton onClick={(e) =>  handleSetting(e, 'hardbreak')}>
          hard break
        </MenuButton>
    </MenuBarContainer>
    )
  }

const MenuButton = styled.button`
    display: inline !important;
    width: 100%;
    margin: 0px !important;
    background-color: ${colors.two} !important;
    border: none !important;
    height: 80px;
`

const MenuBarContainer = styled.div`
    max-height: 80px !important;
    display: flex;
    flex-direction: row;
    padding: 0px !important;
    border-bottom: solid 1px ${colors.three};
`

export default Tiptap
interface SendgridFormProps {
  id: string;
}

export const SendgridForm = ({ id }: SendgridFormProps) => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<script
            src="//web.webformscr.com/apps/fc3/build/loader.js"
            async
            sp-form-id="${id}"
          ></script>`,
    }}
  />
);

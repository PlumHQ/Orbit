import React from 'react';
import { Button } from '@pluminsurance/design-system-test.button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '.';
import { HeartIcon, TrashIcon, UserIcon } from '@pluminsurance/design-system-test.icons';

export function DropdownMenuDemo() {
  const [smsChecked, setSMSChecked] = React.useState(false);
  const [emailChecked, setEmailChecked] = React.useState(false);
  const [messageChecked, setMessageChecked] = React.useState(false);
  const [singleInvite, setSingleInvite] = React.useState("email");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="primary"
          label={'Open'}
          size="large"
          styleVariant={'primary'}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="Profile"
            shortcutKey="P"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="Billing"
            shortcutKey="B"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="Settings"
            shortcutKey="S"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
            disabled
          />
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="Keyboard Shortcuts"
            shortcutKey="K"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="Team"
            shortcutKey="T"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              name={'Invite Users'}
              leadingIcon={UserIcon}
            />
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={emailChecked}
                  onSelect={() => setEmailChecked(!emailChecked)}
                  name="Email"
                  shortcutKey="E"
                  trailingIcon={HeartIcon}
                  trailingText={'Text'}
                />
                <DropdownMenuCheckboxItem
                  checked={messageChecked}
                  onSelect={() => setMessageChecked(!messageChecked)}
                  name="Message"
                  shortcutKey="M"
                  trailingIcon={HeartIcon}
                  trailingText={'Text'}
                />
                <DropdownMenuCheckboxItem
                  checked={smsChecked}
                  onSelect={() => setSMSChecked(!smsChecked)}
                  name="SMS"
                  shortcutKey="S"
                  trailingIcon={HeartIcon}
                  trailingText={'Text'}
                  disabled
                />
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  leadingIcon={UserIcon}
                  name="More"
                  shortcutKey="M"
                  trailingIcon={HeartIcon}
                  trailingText={'Text'}
                />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="New Team"
            shortcutKey="T"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="Team"
            shortcutKey="T"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              name={'Invite Users(Single)'}
              leadingIcon={UserIcon}
            />
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={singleInvite} onSelectionChange={(value) => {setSingleInvite(value)}}>
                  <DropdownMenuRadioItem
                    name="Email"
                    value="email"
                    leadingIcon={UserIcon}
                    shortcutKey="E"
                    trailingIcon={HeartIcon}
                    trailingText={'Text'}
                  />
                  <DropdownMenuRadioItem
                    name="Message"
                    value="message"
                    leadingIcon={UserIcon}
                    shortcutKey="M"
                    trailingIcon={HeartIcon}
                    trailingText={'Text'}
                    disabled
                  />
                  <DropdownMenuRadioItem
                    name="SMS"
                    value="sms"
                    leadingIcon={UserIcon}
                    shortcutKey="S"
                    trailingIcon={HeartIcon}
                    trailingText={'Text'}
                  />
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  leadingIcon={UserIcon}
                  name="More"
                  shortcutKey="M"
                  trailingIcon={HeartIcon}
                  trailingText={'Text'}
                />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem
            leadingIcon={UserIcon}
            name="New Team"
            shortcutKey="T"
            trailingIcon={HeartIcon}
            trailingText={'Text'}
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          leadingIcon={UserIcon}
          name="Github"
          shortcutKey="G"
          trailingIcon={HeartIcon}
          trailingText={'Text'}
        />
        <DropdownMenuItem
          leadingIcon={UserIcon}
          name="Support"
          shortcutKey="S"
          trailingIcon={HeartIcon}
          trailingText={'Text'}
          disabled
        />
        <DropdownMenuSeparator />
        <DropdownMenuItem
        name="Destroy and Leave"
        variant="destructive"
        leadingIcon={TrashIcon}
        />
        <DropdownMenuItem
          leadingIcon={UserIcon}
          name="Log out"
          shortcutKey="Q"
          trailingIcon={HeartIcon}
          trailingText={'Text'}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

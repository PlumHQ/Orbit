import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '.';
import { HeartIcon } from '@pluminsurance/design-system-test.icons'

export const HorizontalGrayTabs = () => {
    const [selectedValue, setSelectedValue] = React.useState("1");
  return (
    <div style={{padding: "200px"}}>
      <Tabs orientation="horizontal" styleVariant={'gray'} onValueChange={(value)=>setSelectedValue(value)} selectedValue={selectedValue}>
        <TabsList>
          <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"1"} styleVariant={'gray'} name={'First'} />
          <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"2"} styleVariant={'gray'} name={'Second'} />
          <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"3"} styleVariant={'gray'} name={'Third'} />
          <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"4"} styleVariant={'gray'} name={'Fourth'} />
        </TabsList>
        <TabsContent value={"1"}>
          <p>Content for the first tab</p>
        </TabsContent>
        <TabsContent value={"2"}>
          <p>Content for the second tab</p>
        </TabsContent>
        <TabsContent value={"3"}>
          <p>Content for the third tab</p>
        </TabsContent>
        <TabsContent value={"4"}>
          <p>Content for the fourth tab</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const HorizontalBeigeTabs = () => {
    const [selectedValue, setSelectedValue] = React.useState("2");

    return (
      <div style={{padding: "200px"}}>
        <Tabs orientation="horizontal" styleVariant={'beige'} onValueChange={(value)=>setSelectedValue(value)} selectedValue={selectedValue}>
          <TabsList>
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"1"} name={'First'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"2"} name={'Second'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"3"} name={'Third'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"4"} name={'Fourth'} />
          </TabsList>
          <TabsContent value={"1"}>
            <p>Content for the first tab</p>
          </TabsContent>
          <TabsContent value={"2"}>
            <p>Content for the second tab</p>
          </TabsContent>
          <TabsContent value={"3"}>
            <p>Content for the third tab</p>
          </TabsContent>
          <TabsContent value={"4"}>
            <p>Content for the fourth tab</p>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  export const VerticalBeigeTabs = () => {
    const [selectedValue, setSelectedValue] = React.useState("2");

    return (
      <div style={{padding: "200px"}}>
        <Tabs verticalTabHeader="On this Page" orientation="vertical" styleVariant={'beige'} onValueChange={(value)=>setSelectedValue(value)} selectedValue={selectedValue}>
          <TabsList>
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"1"} name={'First'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"2"} name={'Second'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"3"} name={'Third'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"4"} name={'Fourth'} />
          </TabsList>
          <TabsContent value={"1"}>
            <p>Content for the first tab</p>
          </TabsContent>
          <TabsContent value={"2"}>
            <p>Content for the second tab</p>
          </TabsContent>
          <TabsContent value={"3"}>
            <p>Content for the third tab</p>
          </TabsContent>
          <TabsContent value={"4"}>
            <p>Content for the fourth tab</p>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  export const VerticalGrayWithoutHeadingTabs = () => {
    const [selectedValue, setSelectedValue] = React.useState("2");

    return (
      <div style={{padding: "200px"}}>
        <Tabs orientation="vertical" styleVariant={'gray'} onValueChange={(value)=>setSelectedValue(value)} selectedValue={selectedValue}>
          <TabsList>
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"1" } name={'First'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"2"} name={'Second'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"3"} name={'Third'} />
            <TabsTrigger leadingIcon={HeartIcon} counter={4} value={"4"} name={'Fourth'} />
          </TabsList>
          <TabsContent value={1}>
            <p>Content for the first tab</p>
          </TabsContent>
          <TabsContent value={"2"}>
            <p>Content for the second tab</p>
          </TabsContent>
          <TabsContent value={"3"}>
            <p>Content for the third tab</p>
          </TabsContent>
          <TabsContent value={"4"}>
            <p>Content for the fourth tab</p>
          </TabsContent>
        </Tabs>
      </div>
    );
  };
